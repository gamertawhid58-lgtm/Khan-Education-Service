tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#eef2ff',
                            100: '#e0e7ff',
                            500: '#6366f1',
                            600: '#4f46e5',
                            700: '#4338ca',
                            900: '#312e81',
                        },
                        emerald: {
                            500: '#10b981',
                            600: '#059669',
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    animation: {
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 3s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }

// Dark / Light Mode Toggle logic
        const themeToggle = document.getElementById('themeToggle');
        const mobileThemeToggle = document.getElementById('mobileThemeToggle');

        function toggleTheme() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
            } else {
                document.documentElement.classList.add('dark');
            }
        }

        themeToggle?.addEventListener('click', toggleTheme);
        mobileThemeToggle?.addEventListener('click', toggleTheme);

        // Mobile Menu Toggle logic
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const hamburgerIcon = document.getElementById('hamburgerIcon');

        mobileMenuBtn?.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            if (!isHidden) {
                hamburgerIcon.classList.remove('fa-bars');
                hamburgerIcon.classList.add('fa-xmark');
            } else {
                hamburgerIcon.classList.remove('fa-xmark');
                hamburgerIcon.classList.add('fa-bars');
            }
        });

        // Close Mobile drawer when link is clicked
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                hamburgerIcon.classList.remove('fa-xmark');
                hamburgerIcon.classList.add('fa-bars');
            });
        });

        // Contact Form Submission Handler
        function handleContactSubmit(e) {
            e.preventDefault();
            const alertBox = document.getElementById('contactAlert');
            const form = document.getElementById('fakeContactForm');
            
            if (alertBox) {
                alertBox.classList.remove('hidden');
                form.reset();
            }
        }
