/* menu bar */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

/* homepage slide in from left & right */
const sliders = document.querySelectorAll(".slide");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

/* film stills */
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}