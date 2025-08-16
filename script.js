document.addEventListener('DOMContentLoaded', () => {
    // Module 1: Menu Toggle
    (() => {
        const menuIcon = document.getElementById('menuIcon');
        const overlayMenu = document.getElementById('overlayMenu');

        if (menuIcon && overlayMenu) {
            menuIcon.addEventListener('click', () => {
                menuIcon.classList.toggle('open');
                overlayMenu.classList.toggle('open');
            });
        }
    })();

    // Module 2: Download Button
    // (() => {
    //     const downloadButton = document.getElementById('downloadPdf');
    //     if (downloadButton) {
    //         downloadButton.setAttribute('href', 'files/CV_VladislavDostavalov.pdf');
    //         downloadButton.setAttribute('download', 'CV_VladislavDostavalov.pdf');
    //     }
    // })();

    // Module 3: Animated Text Effect
    (() => {
        const animatedText = document.getElementById('animatedText');
        if (animatedText) {
            const words = animatedText.innerHTML.split('<br>');
            animatedText.innerHTML = words
                .map(word => word.split('').map(char => `<span>${char}</span>`).join(''))
                .join('<br>');
            const spans = animatedText.querySelectorAll('span');

            let mouseX = 0,
                mouseY = 0;
            let animationFrameId;

            document.addEventListener('mousemove', event => {
                mouseX = event.clientX;
                mouseY = event.clientY;

                if (!animationFrameId) {
                    animationFrameId = requestAnimationFrame(updateTextEffect);
                }
            });

            function updateTextEffect() {
                spans.forEach(span => {
                    const rect = span.getBoundingClientRect();
                    const spanCenterX = rect.left + rect.width / 2;
                    const spanCenterY = rect.top + rect.height / 2;

                    const distance = Math.hypot(mouseX - spanCenterX, mouseY - spanCenterY);
                    const maxDistance = 600;
                    if (distance < maxDistance) {
                        const weight = Math.max(
                            200,
                            Math.min(900, 900 - (distance / maxDistance) * 800)
                        );
                        span.style.fontVariationSettings = `"wght" ${weight}`;
                    } else {
                        span.style.fontVariationSettings = `"wght" 200`;
                    }
                });
                animationFrameId = null;
            }
        }
    })();

    // Module 4: Case Study Links Hover Effect
    (() => {
        const caseStudyLinks = document.querySelectorAll('.case-studies a');
        caseStudyLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.setProperty('--underline-origin', 'left');
                link.style.setProperty('--underline-scale', '1');
            });
            link.addEventListener('mouseleave', () => {
                link.style.setProperty('--underline-origin', 'right');
                link.style.setProperty('--underline-scale', '0');
            });
        });
    })();

    // Module 5: Profile Photo Parallax Effect
    (() => {
        const main = document.querySelector('main');
        const profilePhoto = document.querySelector('.profile-photo');
        if (profilePhoto && main) {
            let lastScrollY = main.scrollTop;
            let targetTransformY = 0;
            let currentTransformY = 0;

            main.addEventListener('scroll', () => {
                const currentScrollY = main.scrollTop;
                const scrollDifference = currentScrollY - lastScrollY;
                const parallaxEffect = scrollDifference * 0.5;
                targetTransformY += parallaxEffect;
                lastScrollY = currentScrollY;
            });

            function updateParallax() {
                currentTransformY += (targetTransformY - currentTransformY) * 0.1;
                profilePhoto.style.transform = `translateY(${currentTransformY}px)`;
                requestAnimationFrame(updateParallax);
            }

            updateParallax();
        }
    })();

// Module 6: Parallax Images Based on Mouse Movement with Independent Idle Motion
(() => {
    const animatedImages = document.querySelectorAll('.parallax-image');
    let mouseX = window.innerWidth / 2,
        mouseY = window.innerHeight / 2,
        targetX = mouseX,
        targetY = mouseY;

    // Create an array to store per-image data
    const imagesData = [];

    animatedImages.forEach(image => {
        // Each image has its own idle angle, speed, and radius
        imagesData.push({
            element: image,
            idleAngle: Math.random() * Math.PI * 2, // Random starting angle
            idleSpeed: Math.random() * 0.01 + 0.002, // Random speed between 0.002 and 0.012
            idleRadius: Math.random() * 20 + 10, // Random radius between 10 and 30 pixels
        });
    });

    document.addEventListener('mousemove', event => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function updateImages() {
        // Smoothly interpolate target positions towards the mouse position
        targetX += (mouseX - targetX) * 0.1;
        targetY += (mouseY - targetY) * 0.1;

        imagesData.forEach(data => {
            const { element } = data;

            // Increment the angle for idle movement
            data.idleAngle += data.idleSpeed;

            // Calculate idle offsets using sine and cosine for smooth circular motion
            const idleX = Math.cos(data.idleAngle) * data.idleRadius;
            const idleY = Math.sin(data.idleAngle) * data.idleRadius;

            const speed = parseFloat(element.getAttribute('data-speed')) || 0.1;

            // Combine mouse movement and idle movement
            const translateX = (window.innerWidth / 2 - targetX) * speed + idleX;
            const translateY = (window.innerHeight / 2 - targetY) * speed + idleY;

            element.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });

        requestAnimationFrame(updateImages);
    }

    // Start the animation loop
    updateImages();
})();



    // Module 7: Submenu Hover Behavior
    (() => {
        const submenu = document.querySelector('.submenu');
        if (submenu) {
            submenu.addEventListener('mouseenter', () => {
                submenu.classList.add('show');
            });
            submenu.addEventListener('mouseleave', () => {
                submenu.classList.remove('show');
            });
        }
    })();

    // Module 8: Intersection Observer for Section Animations
    (() => {
        const main = document.querySelector('main');
        const sections = document.querySelectorAll('section');

        if (main && sections.length) {
            const observerOptions = {
                root: main,
                rootMargin: '0px',
                threshold: 0.1,
            };

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const sectionImages = entry.target.querySelectorAll('.parallax-image');
                        sectionImages.forEach(image => {
                            image.classList.add('animate');
                        });

                        const textElements = entry.target.querySelectorAll(
                            'p, h1, h2, h3, h4, h5, h6, li, span'
                        );
                        const duration = 600;
                        const interval = duration / textElements.length;

                        textElements.forEach((element, index) => {
                            element.classList.add('reveal');
                            setTimeout(() => {
                                element.classList.add('visible');
                            }, index * interval);
                        });

                        history.replaceState(null, null, `#${entry.target.id}`);
                    } else {
                        const textElements = entry.target.querySelectorAll('.reveal');
                        textElements.forEach(element => {
                            element.classList.remove('visible');
                        });
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });
        }
    })();

    // Module 9: Progress Bar
    (() => {
        const main = document.querySelector('main');
        const progressContainer = document.createElement('div');
        progressContainer.id = 'progress-container';
        const progressBar = document.createElement('div');
        progressBar.id = 'progress-bar';
        progressContainer.appendChild(progressBar);
        document.body.appendChild(progressContainer);

        if (main) {
            main.addEventListener('scroll', () => {
                const scrollTop = main.scrollTop;
                const scrollHeight = main.scrollHeight - main.clientHeight;
                const scrollFraction = scrollTop / scrollHeight;
                const progressBarWidth = scrollFraction * 100;
                progressBar.style.width = `${progressBarWidth}%`;
            });
        }
    })();

    // Module 10: Dynamic Total Experience Calculation
    (() => {
        const experienceElement = document.getElementById('experience');

        if (experienceElement) {
            // Дата начала карьеры
            const startDate = new Date(2008, 10); // Ноябрь 2008 (месяцы с 0)

            // Текущая дата
            const currentDate = new Date();

            // Расчет разницы в годах и месяцах
            let totalYears = currentDate.getFullYear() - startDate.getFullYear();
            let totalMonths = currentDate.getMonth() - startDate.getMonth();

            // Если разница в месяцах отрицательная, уменьшаем количество лет и корректируем количество месяцев
            if (totalMonths < 0) {
                totalYears--;
                totalMonths += 12;
            }

            // Форматируем результат
            const experienceString = `${totalYears} years ${totalMonths} months`;

            // Вставляем результат на страницу
            experienceElement.textContent = experienceString;
        }
    })();

    // Module 11: for controlling image scroll in the new section
    (() => {
        const scrollingSection = document.getElementById('scrolling-images-section');
        const imagesContainer = scrollingSection.querySelector('.images-container');
        let isFixedScrolling = false;
        let velocity = 0; // Scroll velocity
        let isScrolling = false;
    
        const observerOptions = {
            root: null, // Use viewport as root
            threshold: 0.5 // Trigger when half the section is visible
        };
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isFixedScrolling = true;
                    document.body.style.overflow = 'hidden'; // Disable default body scroll
                } else {
                    isFixedScrolling = false;
                    document.body.style.overflow = 'auto'; // Enable default body scroll
                }
            });
        }, observerOptions);
    
        observer.observe(scrollingSection);
    
        // Scroll event handler to initiate inertia effect
        scrollingSection.addEventListener('wheel', (event) => {
            if (isFixedScrolling) {
                event.preventDefault();
    
                // Increase velocity proportionally to the scroll input but make it slower
                velocity += event.deltaY / 10;
    
                if (!isScrolling) {
                    isScrolling = true;
                    requestAnimationFrame(inertiaScroll);
                }
            }
        });
    
        // Inertia scroll effect using requestAnimationFrame
        function inertiaScroll() {
            if (!isScrolling) return;
    
            // Apply the current velocity to scroll the images
            imagesContainer.scrollTop += velocity;
    
            // Gradually reduce the velocity for the inertia effect
            velocity *= 0.95; // Deceleration factor (lower value = faster deceleration)
    
            // Stop scrolling if the velocity is very small
            if (Math.abs(velocity) < 0.1) {
                isScrolling = false;
                velocity = 0;
            }
    
            // Control section transitions
            if (imagesContainer.scrollTop >= imagesContainer.scrollHeight - scrollingSection.clientHeight) {
                // User must be at the bottom, scrolling down to proceed to the next section
                if (velocity > 0) {
                    isFixedScrolling = false; // Allow normal section transition after reaching the bottom
                    document.body.style.overflow = 'auto';
                }
            }
    
            if (imagesContainer.scrollTop <= 0) {
                // User must be at the top, scrolling up to proceed to the previous section
                if (velocity < 0) {
                    isFixedScrolling = false; // Allow normal section transition after reaching the top
                    document.body.style.overflow = 'auto';
                }
            }
    
            // Continue the animation loop if still scrolling
            if (isScrolling) {
                requestAnimationFrame(inertiaScroll);
            }
        }
    })();

    
    
});