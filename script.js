// 1. Preloader Fade-Out on Window Load
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                preloader.classList.add('hidden-loader');
            }, 550);
        });

        // 2. Floating Glass Navbar on Scroll
        const navbarWrapper = document.getElementById('navbar-wrapper');
        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbarWrapper.classList.add('pt-3');
                navbar.classList.add('nav-glass');
            } else {
                navbar.classList.remove('nav-glass');
            }
        });

        // 3. Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // 4. Scroll Reveal Intersection Observer
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.12 });

        revealElements.forEach(el => revealObserver.observe(el));

        // 5. Interactive Course Tab Filter
        function filterCourses(category, clickedBtn) {
            // Update active pill style
            document.querySelectorAll('.course-tab').forEach(btn => {
                btn.classList.remove('bg-lavender-500', 'text-white');
                btn.classList.add('text-slate-300');
            });
            clickedBtn.classList.add('bg-lavender-500', 'text-white');
            clickedBtn.classList.remove('text-slate-300');

            // Show/Hide matching cards
            const cards = document.querySelectorAll('.course-card');
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // 6. Hero Quick Explore Bar -> Prefills Contact Message
        function scrollToContactWithGoal() {
            const selectedGoal = document.getElementById('hero-goal-select').value;
            const messageBox = document.getElementById('userMessage');
            messageBox.value = `Hi Godwit International, I am interested in: ${selectedGoal}. Please guide me with the next steps.`;
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => messageBox.focus(), 600);
        }

        // 7. Web3Forms Submission + Custom Modal + WhatsApp Pre-filled Redirect
        const enquiryForm = document.getElementById('enquiryForm');
        const submitBtn = document.getElementById('submitBtn');
        const submitBtnText = document.getElementById('submitBtnText');
        const modal = document.getElementById('enquirySuccessModal');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const continueWhatsappBtn = document.getElementById('continueWhatsappBtn');
        const submittedPreviewBox = document.getElementById('submittedPreviewBox');

        enquiryForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const nameVal = document.getElementById('userName').value.trim();
            const emailVal = document.getElementById('userEmail').value.trim();
            const messageVal = document.getElementById('userMessage').value.trim();

            // Loading state on submit button
            submitBtn.disabled = true;
            submitBtnText.textContent = 'Submitting Enquiry...';

            const formData = new FormData(enquiryForm);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                const result = await response.json();

                // Construct formatted WhatsApp message with all filled details
                const whatsappText =
                    `Hello Godwit International! I just submitted an enquiry on your website:\n\n` +
                    `*Name:* ${nameVal}\n` +
                    `*Email:* ${emailVal}\n` +
                    `*Enquiry Details:* ${messageVal}`;

                const encodedWhatsAppUrl = `https://wa.me/917016069692?text=${encodeURIComponent(whatsappText)}`;
                continueWhatsappBtn.href = encodedWhatsAppUrl;

                // Populate preview inside the confirmation modal safely
                submittedPreviewBox.innerHTML = '';
                const nameLine = document.createElement('p');
                nameLine.innerHTML = `<strong>Name:</strong> `;
                nameLine.appendChild(document.createTextNode(nameVal));

                const emailLine = document.createElement('p');
                emailLine.innerHTML = `<strong>Email:</strong> `;
                emailLine.appendChild(document.createTextNode(emailVal));

                const msgLine = document.createElement('p');
                msgLine.innerHTML = `<strong>Enquiry:</strong> `;
                msgLine.appendChild(document.createTextNode(messageVal));

                submittedPreviewBox.appendChild(nameLine);
                submittedPreviewBox.appendChild(emailLine);
                submittedPreviewBox.appendChild(msgLine);

                // Show confirmation modal
                modal.classList.remove('hidden');
                modal.classList.add('flex');

                if (result.success) {
                    enquiryForm.reset();
                }
            } catch (error) {
                // Even if offline/network hiccup, still allow user to continue via WhatsApp
                const whatsappText =
                    `Hello Godwit International! I would like to enquire:\n\n` +
                    `*Name:* ${nameVal}\n` +
                    `*Email:* ${emailVal}\n` +
                    `*Enquiry Details:* ${messageVal}`;
                continueWhatsappBtn.href = `https://wa.me/917016069692?text=${encodeURIComponent(whatsappText)}`;
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            } finally {
                submitBtn.disabled = false;
                submitBtnText.textContent = 'Submit Enquiry';
            }
        });

        // Close Modal Handler
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });

        // Close Modal on Backdrop Click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
