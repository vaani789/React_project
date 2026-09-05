import { useEffect, useRef } from "react";

const PlexusBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width;
        let height;
        let particles = [];
        let animationFrame;

        const properties = {
            particleCount: 250,
            particleRadius: 2,
            lineLength: 150,
            particleSpeed: 0.5,
            particleColor: "rgba(255, 255, 255, 0.5)",
            lineColor: "rgba(56, 189, 248, 0.2)",
        };

        const resize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };

        window.addEventListener("resize", resize);

        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;

                this.vx =
                    (Math.random() - 0.5) *
                    properties.particleSpeed;

                this.vy =
                    (Math.random() - 0.5) *
                    properties.particleSpeed;

                this.radius = properties.particleRadius;
            }

            position() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) {
                    this.vx *= -1;
                }

                if (this.y < 0 || this.y > height) {
                    this.vy *= -1;
                }
            }

            draw() {
                ctx.beginPath();

                ctx.arc(
                    this.x,
                    this.y,
                    this.radius,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle =
                    properties.particleColor;

                ctx.fill();
            }
        }

        const init = () => {
            particles = [];

            for (
                let i = 0;
                i < properties.particleCount;
                i++
            ) {
                particles.push(new Particle());
            }
        };

        const loop = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].position();
                particles[i].draw();

                for (
                    let j = i + 1;
                    j < particles.length;
                    j++
                ) {
                    const dx =
                        particles[i].x -
                        particles[j].x;

                    const dy =
                        particles[i].y -
                        particles[j].y;

                    const dist = Math.sqrt(
                        dx * dx + dy * dy
                    );

                    if (
                        dist <
                        properties.lineLength
                    ) {
                        ctx.beginPath();

                        ctx.moveTo(
                            particles[i].x,
                            particles[i].y
                        );

                        ctx.lineTo(
                            particles[j].x,
                            particles[j].y
                        );

                        ctx.strokeStyle =
                            properties.lineColor;

                        ctx.lineWidth =
                            1 -
                            dist /
                                properties.lineLength;

                        ctx.stroke();
                    }
                }
            }

            animationFrame =
                requestAnimationFrame(loop);
        };

        init();
        loop();

        return () => {
            window.removeEventListener(
                "resize",
                resize
            );

            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="plexus-hero-canvas"
        />
    );
};

export default PlexusBackground;