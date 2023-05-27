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
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

/* film stills */
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

/* a road to here & now reflection generator */
function postMessage() {
  const r1 = "The more newfound realizations you come to the less you know.";
  const r2 = "To trust yourself means to not believe in anything.";
  const r3 = "What you believe in is what you want to believe in.";
  const r4 = "What is truth except that which you believe to be true?";
  const r5 = "Who are you other than who you believe you are?";
  const r6 =
    "If you didn’t believe all that you believed would it still be true?";
  const r7 =
    "Beliefs by their very nature are delusional. A belief is a thought that is considered to be true, especially without proof. But truth is only ever what you define it as and thus, isn’t actually true. Hence, beliefs are delusional.";
  const r8 = "The symbol of fire is not hot.";
  const r9 =
    "You want what you believe to be true to be true because you are emotionally attached to who you believe you are.";
  const r10 =
    "Believing that you need to be saved is what is preventing you from enjoying life.";
  const r11 =
    "Since thoughts are just words in the mind, what limitations do you actually have?";
  const r12 =
    "Words are what have divided us. Get rid of words and we’ll end all conflict and suffering.";
  const r13 =
    "Believing that all darkness is not real and that all light is real is simply not true. Either all light and darkness is real or all light and darkness is not real. You can’t pick and choose what is real and what isn’t real.";
  const r14 =
    "Those who don’t challenge their own beliefs are afraid their beliefs are false.";
  const r15 =
    "How can you recognize a thing without the identity of the thing?";
  const r16 =
    "What can we know when the way in which we know, through words, is made up?";
  const r17 =
    "Knowledge plays in absolutes. But nothing can be absolute. Absolute means that it has no opposite, that it is independent, and yet, absolute is dependent on its opposite, conditional, in order to be recognized. How can knowledge be so when it can’t be absolute?";
  const r18 = "Knowledge is simply an attempt to foist order on life.";
  const r19 =
    "Knowledge misleads one to believe that all things are in disorder and must be put in order, even though one can’t ever put all things in order because knowledge always assumes a disorder of things.";
  const r20 = "The intellect cannot solve afflictions of the heart.";
  const r21 =
    "Just because you’re facing a lie doesn’t mean that the opposite is true.";
  const r22 =
    "If you continuously lie to yourself and blame others for your problems, then how can you grow? And if you can’t grow, how can you change your life? Being honest with yourself along with taking responsibility for your actions is the start of changing your life.";
  const r23 =
    "Many don’t want to take responsibility for their actions because the realization that they are the cause of their suffering frightens them.";
  const r24 =
    "When you don’t take responsibility for your actions, you are still responsible for not taking responsibility for your actions. Responsibility cannot be evaded.";
  const r25 =
    "The deception of evil is that it uses virtue to achieve its objectives.";
  const r26 =
    "Anger. Hate. Arrogance. Ignorance. Resentment. Jealousy. Fear. All toxic behaviours are not toxic because others deem them as toxic. They’re all toxic because they prevent you from evolving. They’re the bars that imprison you within your own mind.";
  const r27 = "The way of protection and the way of fear are the same way.";
  const r28 =
    "Your belief that your stress needs to be eliminated is what is causing your resistance to your stress.";
  const r29 =
    "Blaming others for your problems puts you at the mercy of others.";
  const r30 =
    "Those who complain will always look for things to complain about.";
  const r31 =
    "The problem with any belief system is that any one belief system cannot honor other conflicting belief systems, since this would be a detriment to both belief systems. This is why opposing belief systems will always inevitably find themselves at war with one another.";
  const r32 =
    "Those who don’t run the risk of being rejected are, ironically, rejecting themselves.";
  const r33 =
    "Destruction is just as natural as creation. To believe that destruction is unnatural obstructs creation and thus, hinders both processes. One cannot live gracefully with obstructions.";
  const r34 =
    "Forcing things to bend to your will in order to make your life better is like throwing boulders into a river in order to make the water run faster.";
  const r35 =
    "Getting frustrated at others reflects your ignorance of where others are coming from.";
  const r36 =
    "Since you interpret what you believe you are hearing and not what is actually said it could be viewed that you are always interacting with yourself.";
  const r37 =
    "You can’t be arrogant and have a wide perspective simultaneously. Therefore, if you believe you are right, and anyone who opposes you is wrong, it reflects that you have a narrow perspective.";
  const r38 =
    "The only way you can know what is best for anyone, including yourself, is if you can know the future, which you can never know.";
  const r39 =
    "Those who feel the need to prove themselves right are not confident in their beliefs.";
  const r40 =
    "Those who are not confident in themselves might try to convince others that they are right in order to gain confidence.";
  const r41 =
    "Those who try to convert others to their way of thinking are not confident in what they believe, for if they were, they wouldn’t try to convert others to their way of thinking.";
  const r42 =
    "Those who are judgmental are the only ones who find disappointment.";
  const r43 = "Those who are not content will even find paradise miserable.";
  const r44 = "Those who are looking for security are insecure.";
  const r45 =
    "You will always be faced with uncertainty. The question is whether or not you can accept this.";
  const r46 = "Without pressure inspiration cannot rise.";
  const r47 = "All suffering can be attributed to feeling unworthy.";
  const r48 =
    "Those who go from childhood to manhood and return back to childhood are wise.";
  const r49 =
    "Eyes cannot see themselves. We cannot see the soul; only reflections of it. This is why we require mirrors to realize ourselves.";
  const r50 =
    "The only way to hold sovereignty over an idea is to demolish it.";
  const r51 = "To move without strain is to flow in the hands of inspiration.";
  const r52 =
    "We’re all ignorant; it is just that we have no idea what we’re ignorant of because we’re ignorant of it.";
  const r53 = "The course of your life is determined by the words you use.";
  const r54 =
    "We all feel life, but we each interpret and articulate this feeling in our own way.";
  const r55 =
    "Being cannot impede non-being; non-being cannot impede being. Being and non-being are, simply put, companions that cannot be known, but also, can never be abolished.";
  const r56 =
    "There are some things that we can’t actually know, but also can’t get rid of. Responsibility. Awareness. Time. Energy. Ego. Such is life.";
  const r57 =
    "Desire drags you from one object to the next, leading you around and around in circles, without ever landing on anything that’ll fulfil you. And yet, you can’t not desire, because wanting to not desire is desiring. Oh well. It is what it is.";
  const r58 =
    "Believing that you cannot be fulfilled unless you gain the thing you believe you need in order to be fulfilled is what is preventing you from being fulfilled.";
  const r59 =
    "Since every decision comes with downsides then how can the outcome of any decision actually be better?";
  const r60 = "Improvement is for the narrow-minded.";
  const r61 = "Those who preach hold a narrow perspective.";
  const r62 =
    "Those who don’t like to hear that improvement is impossible have not reconciled with their flaws.";
  const r63 = "What can anyone teach you that reality can’t?";
  const r64 =
    "Good implies evil. And evil implies good. One cannot win over the other, as doing so will eliminate both. Good and evil will forever be at war with each other, and a victor will never be crowned. Why get involved in this senseless fight? You can’t win.";
  const r65 =
    "If you don’t believe that a problem exists, then does it still exist? And if your answer is ‘yes’, is that true or do you just believe it to be true? All problems are human problems, as all problems are self-inflicted.";
  const r66 =
    "Problems have a way of solving themselves. It is really about whether or not you allow problems to solve themselves that’ll enable them to be resolved.";
  const r67 =
    "You attract who you are. This is because you project who you are. And there’s no end to this cycle. What goes around comes around.";
  const r68 =
    "Those who look to the future for hope or to the past for resolution are only compromising the present.";
  const r69 = "We are all the same, all one, under all our differences.";
  const r70 =
    "There are many words, yet none of them can fully capture how we feel.";
  const r71 =
    "There is an explanation for everything, but nothing needs to be explained.";
  const r72 =
    "What meaning is there to anything except for the meaning that you give to that thing? All things are like empty bowls that we fill with meaning upon experiencing them.";
  const r73 =
    "In the same way as there is no meaning, there is no non-meaning. Meaning and non-meaning are, like every other word, concepts. They’re not real.";
  const r74 =
    "Those who are desperate for there to be a purpose to life do not trust themselves.";
  const r75 =
    "Since life has no meaning then that would imply that you are responsible for your own actions. Who can you blame otherwise?";
  const r76 =
    "What is silence? Silence means the absence of sound. But how can you experience an absence of sound? You can’t experience an absence of something. It is implied that the thing is not there to be experienced. So, how can you experience silence?";
  const r77 =
    "Immortality cannot be achieved. Even if the body and mind were to live on forever, eventually, you will answer all mysteries, ending any potential for spontaneity, and become bored with life. This is the death of the soul. No matter what you do, you will die in some form.";
  const r78 =
    "Without birth and death, you wouldn’t be able to experience life, to embrace life, to enjoy life. You wouldn’t be able to do anything. You wouldn’t be able to love. Without birth and death, you wouldn’t be able to love. Death enables love.";
  const r79 =
    "The two biggest mistakes in life: 1) to believe there is an answer out there that will solve all your problems, and 2) to believe you have that answer.";
  const r80 =
    "All things are influencing and being influenced all at once. At what point are you in control of this process? Control is not real.";
  const r81 =
    "How does it end? It doesn’t. Life lives. That’s all it does. It has no beginning and no ending. It lives. And you are life. You are all of it. How could life exist if you weren’t alive? You evoke life. You have no end.";
  const r82 =
    "Life is already in harmony; it is just that your thoughts get in the way of feeling it.";
  const r83 =
    "Greatness starts from within, not from without. You don’t see works of art coming from the sky.";
  const r84 =
    "The saddest thing in life is not that life isn’t beautiful, but that life is beautiful and many of us can’t see the beauty that is right in front of us.";
  const r85 =
    "It is not by finding some truth that you believe to be outside of you that you will finally find peace, but by realizing everything that is not true that you will see.";
  const r86 =
    "To realize that all things are not real does not mean that you have to annihilate all things, as annihilating all things would suppose that all things are real, which is a contradiction.";
  const r87 =
    "As much as you try to run away from life, you can’t. You can’t not participate in life. Life can only be experienced.";
  const r88 =
    "When you arrive at here and now, you’ll realize that it is all neither truth nor a lie. It just is…";

  const reflections = [
    r1,
    r2,
    r3,
    r4,
    r5,
    r6,
    r7,
    r8,
    r9,
    r10,
    r11,
    r12,
    r13,
    r14,
    r15,
    r16,
    r17,
    r18,
    r19,
    r20,
    r21,
    r22,
    r23,
    r24,
    r25,
    r26,
    r27,
    r28,
    r29,
    r30,
    r31,
    r32,
    r33,
    r34,
    r35,
    r36,
    r37,
    r38,
    r39,
    r40,
    r41,
    r42,
    r43,
    r44,
    r45,
    r46,
    r47,
    r48,
    r49,
    r50,
    r51,
    r52,
    r53,
    r54,
    r55,
    r56,
    r57,
    r58,
    r59,
    r60,
    r61,
    r62,
    r63,
    r64,
    r65,
    r66,
    r67,
    r68,
    r69,
    r70,
    r71,
    r72,
    r73,
    r74,
    r75,
    r76,
    r77,
    r78,
    r79,
    r80,
    r81,
    r82,
    r83,
    r84,
    r85,
    r86,
    r87,
    r88,
  ];

  const random = Math.floor(Math.random() * reflections.length);

  document.getElementById("reflection").textContent = reflections[random];
}

// download sunyata digital flyer
const flyer = document.getElementById("digital-flyer");
const sunyataFlyerDownload = document.getElementById("sunyataFlyerDownload");
const flyerUrl = flyer.toDataURL(
  "./image/sunyata/digital_flyer/sunyata_digital_flyer.png"
);

sunyataFlyerDownload.href = flyerUrl;
