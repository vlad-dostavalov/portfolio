document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth < 1024;

    const menuIcon = document.getElementById('menuIcon');
    const overlayMenu = document.getElementById('overlayMenu');
    const overlayDownloadPdf = document.getElementById('overlayDownloadPdf');
    
    if (isMobile) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('open');
            overlayMenu.classList.toggle('open');
        });
    }

    const downloadButton = document.getElementById('downloadPdf');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            const pdfUrl = 'files/CV_VladislavDostavalov.pdf';
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'CV_VladislavDostavalov.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    if (!isMobile) {
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

                    const maxDistance = 600;
                    const weight = Math.max(200, Math.min(900, 900 - (distance / maxDistance) * 800));

                    span.style.fontVariationSettings = `"wght" ${weight}`;
                });
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
            let targetTransformY = 0;
            let currentTransformY = 0;

            window.addEventListener('scroll', () => {
                const currentScrollY = window.scrollY;
                const scrollDifference = currentScrollY - lastScrollY;
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercentage = currentScrollY / maxScroll;
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

        const animatedImages = document.querySelectorAll('.parallax-image');
        let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;

        document.addEventListener('mousemove', (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        });

        function updateImages() {
            targetX += (mouseX - targetX) * 0.1;
            targetY += (mouseY - targetY) * 0.1;

            animatedImages.forEach(image => {
                const speed = parseFloat(image.getAttribute('data-speed')) || 0.1;
                const translateX = (window.innerWidth / 2 - targetX) * speed;
                const translateY = (window.innerHeight / 2 - targetY) * speed;
                image.style.transform = `translate(${translateX}px, ${translateY}px)`;
            });

            requestAnimationFrame(updateImages);
        }

        updateImages();

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

        function clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        }

        function debounce(func, wait) {
            let timeout;
            return function() {
                const context = this, args = arguments;
                const later = function() {
                    timeout = null;
                    func.apply(context, args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

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
            const duration = 300; // Adjust the duration for smoother animation
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
            const scrollThreshold = 20;
        
            if (Math.abs(event.deltaY) < scrollThreshold) return;
        
            if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
                scrollToSection(currentSectionIndex + 1);
            } else if (event.deltaY < 0 && currentSectionIndex > 0) {
                scrollToSection(currentSectionIndex - 1);
            }
        }, 100);
        
        window.addEventListener('wheel', (event) => {
            event.preventDefault();
            handleScroll(event);
        }, { passive: false });
        
        function handleScroll(event) {
            if (isScrolling) return;
        
            const scrollThreshold = 20; // Reduce the threshold for quicker response
        
            if (Math.abs(event.deltaY) < scrollThreshold) return;
        
            if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
                scrollToSection(currentSectionIndex + 1);
            } else if (event.deltaY < 0 && currentSectionIndex > 0) {
                scrollToSection(currentSectionIndex - 1);
            }
        }

        document.addEventListener('keydown', debounce((event) => {
            if (event.key === 'ArrowDown') {
                currentSectionIndex = clamp(currentSectionIndex + 1, 0, sections.length - 1);
            } else if (event.key === 'ArrowUp') {
                currentSectionIndex = clamp(currentSectionIndex - 1, 0, sections.length - 1);
            }
            scrollToSection(currentSectionIndex);
        }, 100));

        function updateProgressBar() {
            const scrollTop = main.scrollTop;
            const scrollHeight = main.scrollHeight - main.clientHeight;
            const scrollFraction = scrollTop / scrollHeight;
            const progressBarWidth = scrollFraction * 100;
            progressBar.style.width = `${progressBarWidth}%`;
        }

        main.addEventListener('scroll', updateProgressBar);
    }
});
