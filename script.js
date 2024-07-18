document.addEventListener('DOMContentLoaded', () => {
    // Disable default scroll behavior
    document.body.style.overflow = 'hidden';

    const animatedText = document.getElementById('animatedText');
    if (animatedText) {
        const words = animatedText.innerHTML.split('<br>');
        animatedText.innerHTML = words.map(word => 
            word.split('').map(char => `<span>${char}</span>`).join('')
        ).join('<br>');
        const spans = animatedText.querySelectorAll('span');

        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;

            spans.forEach((span) => {
                const rect = span.getBoundingClientRect();
                const spanCenterX = rect.left + rect.width / 2;
                const spanCenterY = rect.top + rect.height / 2;

                const distance = Math.sqrt(
                    Math.pow(clientX - spanCenterX, 2) + 
                    Math.pow(clientY - spanCenterY, 2)
                );

                const maxDistance = 300;
                const weight = Math.max(100, Math.min(900, 900 - (distance / maxDistance) * 800));

                span.style.fontVariationSettings = `"wght" ${weight}`;
            });
        });
    }

    const downloadButton = document.getElementById('downloadPdf');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            const pdfUrl = 'path/to/your/file.pdf';
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'Vladislav_Dostavalov_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

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

    const profilePhoto = document.querySelector('.profile-photo');
    if (profilePhoto) {
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            const scrollDifference = currentScrollY - lastScrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = currentScrollY / maxScroll;
            const parallaxEffect = scrollDifference * 0.5;
            const currentTransform = getComputedStyle(profilePhoto).transform;
            const translateY = currentTransform === 'none' ? 0 : parseFloat(currentTransform.split(',')[5]);
            profilePhoto.style.transform = `translateY(${translateY + parallaxEffect}px)`;
            lastScrollY = currentScrollY;
        });
    }

    const submenu = document.querySelector('.submenu');
    const submenuItems = document.querySelector('.submenu-items');
    if (submenu && submenuItems) {
        let submenuTimeout;
        submenu.addEventListener('mouseenter', () => {
            clearTimeout(submenuTimeout);
            submenu.classList.add('show');
        });
        submenu.addEventListener('mouseleave', () => {
            submenuTimeout = setTimeout(() => {
                if (!submenu.matches(':hover') && !submenuItems.matches(':hover')) {
                    submenu.classList.remove('show');
                }
            }, 300);
        });
        submenuItems.addEventListener('mouseenter', () => {
            clearTimeout(submenuTimeout);
        });
        submenuItems.addEventListener('mouseleave', () => {
            submenuTimeout = setTimeout(() => {
                if (!submenu.matches(':hover') && !submenuItems.matches(':hover')) {
                    submenu.classList.remove('show');
                }
            }, 300);
        });
    }

    let isScrolling = false;

    const main = document.querySelector('main');
    const sections = document.querySelectorAll('section');

    // Select all images to be animated
    const animatedImages = document.querySelectorAll('.parallax-image');

    // Ensure transform is within reasonable bounds
    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function animateImages() {
        animatedImages.forEach(image => {
            const speed = parseFloat(image.getAttribute('data-speed')) || 0.1; // default speed
            const translateX = clamp((window.innerWidth / 2 - mouseX) * speed, -50, 50); // Adjust range
            const translateY = clamp((window.innerHeight / 2 - mouseY) * speed, -50, 50); // Adjust range
            image.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    }

    // Debounce function to limit the rate at which a function can fire.
    function debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', debounce((event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        animateImages();
    }, 10));

    // Accelerometer-based movement for mobile devices
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', (e) => {
            const acceleration = e.accelerationIncludingGravity;
            const maxMovement = 5; // Adjust this value for more/less movement

            animatedImages.forEach(image => {
                const speed = parseFloat(image.getAttribute('data-speed')) || 0.1;
                const moveX = clamp(acceleration.x * speed * 10, -50, 50); // Adjust range
                const moveY = clamp(acceleration.y * speed * 10, -50, 50); // Adjust range

                image.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
    }

    // Intersection Observer for section animations
    const observerOptions = {
        root: main,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionImages = entry.target.querySelectorAll('.parallax-image');
                sectionImages.forEach(image => {
                    image.classList.add('animate');
                });

                const textElements = entry.target.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, span');
                const duration = 600; // Total duration of the reveal effect
                const interval = duration / textElements.length; // Calculate the interval based on the number of elements

                textElements.forEach((element, index) => {
                    element.classList.add('reveal');
                    setTimeout(() => {
                        element.classList.add('visible');
                    }, index * interval); // Adjust timing based on interval
                });

                // Update URL with section ID
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

    // Progress bar setup
    const progressContainer = document.createElement('div');
    progressContainer.id = 'progress-container';
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    progressContainer.appendChild(progressBar);
    document.body.appendChild(progressContainer);

    if (main && sections.length) {
        main.addEventListener('scroll', () => {
            const scrollTop = main.scrollTop;
            const scrollHeight = main.scrollHeight - main.clientHeight;
            const scrollFraction = scrollTop / scrollHeight;
            const progressContainer = document.getElementById('progress-container');
            const progressBar = document.getElementById('progress-bar');
            const progressBarWidth = scrollFraction * 100;
            progressBar.style.width = `${progressBarWidth}%`;
        });        
    }

    let currentSectionIndex = 0;

    const hash = window.location.hash;
    if (hash) {
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            targetSection.scrollIntoView();
        }
    }

    function easeInOutSine(t) {
        return -(Math.cos(Math.PI * t) - 1) / 2;
    }

    function scrollToSection(index) {
        if (isScrolling) return;
        isScrolling = true;
        const targetSection = sections[index];
        const start = main.scrollTop;
        const target = targetSection.offsetTop;
        const distance = target - start;
        const duration = 2;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easeProgress = easeInOutSine(progress);

            main.scrollTop = start + distance * easeProgress;

            if (progress < 1) {
                requestAnimationFrame(animation);
            } else {
                isScrolling = false;
                currentSectionIndex = index;
            }
        }

        requestAnimationFrame(animation);
    }

    const debouncedScroll = debounce((event) => {
        if (isScrolling) return;
        const scrollThreshold = 50;

        if (Math.abs(event.deltaY) < scrollThreshold) return;

        if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            scrollToSection(currentSectionIndex + 1);
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
            scrollToSection(currentSectionIndex - 1);
        }
    }, 300);

    window.addEventListener('wheel', (event) => {
        event.preventDefault();
        debouncedScroll(event);
    }, { passive: false });

    window.addEventListener('keydown', (e) => {
        if (isScrolling) return;

        if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentSectionIndex < sections.length - 1) {
            scrollToSection(currentSectionIndex + 1);
        } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentSectionIndex > 0) {
            scrollToSection(currentSectionIndex - 1);
        }
    });
});
