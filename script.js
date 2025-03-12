document.addEventListener("DOMContentLoaded", function() {
    // ParticleJS Initialization
    particlesJS("particles-js", {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#FFD700" },
            shape: { type: "circle" },
            opacity: { value: 0.7, random: true },
            size: { value: 4, random: true },
            line_linked: { enable: true, color: "#FFD700", opacity: 0.6 },
            move: { enable: true, speed: 3 }
        }
    });

    // Simple animation
    anime({
        targets: "h1",
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000
    });

    // Project Section Scroll Animation
    const projects = document.querySelectorAll(".project");

    function revealProjects() {
        projects.forEach((project) => {
            const rect = project.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                project.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealProjects);
    revealProjects();
});
