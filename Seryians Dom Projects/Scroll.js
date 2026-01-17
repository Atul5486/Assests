function scrollToSyllabus() {
                const syllabusSection = document.querySelector('.page5');
                if (syllabusSection) {
                    syllabusSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error('Syllabus section not found.');
                }
            }