import React, { useRef, useEffect } from 'react';

// Moved Particle class outside the component to prevent re-declaration on each render
class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    canvasWidth: number;
    canvasHeight: number;

    constructor(x: number, y: number, canvasWidth: number, canvasHeight: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }

    update(mouse: { x: number; y: number; radius: number }, ctx: CanvasRenderingContext2D) {
        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = mouse.radius;
        const force = (maxDistance - distance) / maxDistance;
        
        let directionX = this.speedX;
        let directionY = this.speedY;

        if (distance < mouse.radius) {
            directionX -= forceDirectionX * force * 0.5;
            directionY -= forceDirectionY * force * 0.5;
        }

        if (this.x > this.canvasWidth || this.x < 0) {
            directionX = -directionX;
        }
        if (this.y > this.canvasHeight || this.y < 0) {
            directionY = -directionY;
        }

        this.x += directionX;
        this.y += directionY;
        this.draw(ctx);
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'rgba(0, 220, 255, 0.8)';
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(0, 220, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}


const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse = {
            x: -200,
            y: -200,
            radius: 100
        };

        function initParticles() {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 10000;
            for (let i = 0; i < numberOfParticles; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.push(new Particle(x, y, canvas.width, canvas.height));
            }
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initParticles();
        };
        
        // Use ResizeObserver for more reliable size detection
        const resizeObserver = new ResizeObserver(resizeCanvas);
        resizeObserver.observe(canvas);
        resizeCanvas();


        const connectParticles = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const distanceX = particles[a].x - particles[b].x;
                    const distanceY = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

                    if (distance < 120) {
                        opacityValue = 1 - (distance / 120);
                        ctx.strokeStyle = `rgba(0, 180, 220, ${opacityValue * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => p.update(mouse, ctx));
            
            // Reset shadow for connecting lines
            ctx.shadowBlur = 0;
            connectParticles();
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            resizeObserver.unobserve(canvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default ParticleBackground;