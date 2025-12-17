// Data structure for all questions and answers
const studyData = {
    'tiny-tigers': {
        belts: [
            'White Belt',
            'White-Yellow Belt',
            'White-Orange Belt',
            'White-Green Belt',
            'White-Purple Belt',
            'White-Blue Belt',
            'Yellow-White Belt',
            'Yellow-Orange Belt',
            'Yellow-Green Belt',
            'Yellow-Purple Belt',
            'Yellow-Blue Belt',
            'Orange-White Belt',
            'Orange-Yellow Belt',
            'Orange-Green Belt',
            'Orange-Purple Belt',
            'Orange-Blue Belt'
        ],
        questions: {
            'White Belt': [
                { q: 'What is your full name?', a: 'Student says their full name.' },
                { q: 'What does Tae Kwon Do mean in English?', a: 'The way of the hand and foot, sir/ma\'am.' }
            ],
            'White-Yellow Belt': [
                { q: 'What do you do when you see a black belt?', a: 'I bow, sir/ma\'am.' },
                { q: 'Count from one to ten in Korean.', a: 'Hana, Dool, Set, Net, Dasut, Yosut, Eelgup, Yoduhl, Ahop, Yeol, sir/ma\'am.' }
            ],
            'White-Orange Belt': [
                { q: 'What does "Charriot" mean?', a: 'Attention, sir/ma\'am.' },
                { q: 'What does "Kyong Ne" mean?', a: 'Bow, sir/ma\'am.' }
            ],
            'White-Green Belt': [
                { q: 'Why do we bow to black belts?', a: 'To show respect, sir/ma\'am.' },
                { q: 'Who should we respect?', a: 'Everyone, sir/ma\'am.' }
            ],
            'White-Purple Belt': [
                { q: 'How old is Tae Kwon Do?', a: 'Over 2,000 years old, sir/ma\'am.' },
                { q: 'Which country does Tae Kwon Do come from?', a: 'Korea, sir/ma\'am.' }
            ],
            'White-Blue Belt': [
                { q: 'What does the word "Humble" mean?', a: 'Being nice to others and not showing off, sir/ma\'am.' },
                { q: 'Why is it important to be humble?', a: 'Student gives their own answer.' }
            ],
            'Yellow-White Belt': [
                { q: 'What does the word "Respect" mean?', a: 'Treat others the way you want to be treated and treat things the way you want your own things to be treated, sir/ma\'am.' },
                { q: 'Recite the Tenets of Tae Kwon Do.', a: 'Courtesy, Integrity, Perseverance, Self-Control, and Indomitable Spirit, sir/ma\'am.' }
            ],
            'Yellow-Orange Belt': [
                { q: 'What does the word "Integrity" mean?', a: 'Always being honest and telling the truth, sir/ma\'am.' },
                { q: 'Why is integrity important?', a: 'Student gives their own answer.' }
            ],
            'Yellow-Green Belt': [
                { q: 'What does the word "Perseverance" mean?', a: 'Trying and trying and never giving up, sir/ma\'am.' },
                { q: 'Why is perseverance important?', a: 'Because it makes you stronger, sir/ma\'am.' }
            ],
            'Yellow-Purple Belt': [
                { q: 'What is self-control?', a: 'Doing what you are supposed to do when you are supposed to do it, sir/ma\'am.' },
                { q: 'Why is self-control important?', a: 'Student gives their own answer.' }
            ],
            'Yellow-Blue Belt': [
                { q: 'What is your goal in Tae Kwon Do?', a: 'Black belt, sir/ma\'am.' },
                { q: 'Why is it important to reach your goal?', a: 'Student gives their own answer.' }
            ],
            'Orange-White Belt': [
                { q: 'How do you show self-control at home?', a: 'Student gives their own answer.' },
                { q: 'Recite Student Creed #1.', a: 'I will develop myself in a positive manner and avoid anything that would reduce my mental growth or physical health, sir/ma\'am.' }
            ],
            'Orange-Yellow Belt': [
                { q: 'What does it mean to be a leader?', a: 'Doing your best and being a good example for others, sir/ma\'am.' },
                { q: 'Give one example of how you can be a leader in class.', a: 'Student gives their own answer (example: help others, listen well, show good attitude), sir/ma\'am.' }
            ],
            'Orange-Green Belt': [
                { q: 'Recite Student Creed #2.', a: 'I will develop self-discipline in order to bring out the best in myself and others, sir/ma\'am.' },
                { q: 'What does the word "Courtesy" mean?', a: 'Thinking of others first, sir/ma\'am.' }
            ],
            'Orange-Purple Belt': [
                { q: 'What does "WT" stand for?', a: 'World Tae Kwon Do Federation, sir/ma\'am.' },
                { q: 'Name two Tiny Tiger sparring rules.', a: '(1) Must have full sparring gear on, (2) No head contact for Tiny Tigers, (3) Kick the chest protector only, (4) No kicking or punching below the waist or to the face, (5) Follow directions AT ALL TIMES!, (6) Always face your opponent and never try to run away, sir/ma\'am.' }
            ],
            'Orange-Blue Belt': [
                { q: 'What does "Indomitable Spirit" mean?', a: 'Being strong and never giving up, even when things are hard, sir/ma\'am.' },
                { q: 'Recite Student Creed #3.', a: 'I will use what I learn in class constructively and defensively, to help myself and others and never be abusive or offensive, sir/ma\'am.' }
            ]
        }
    },
    'junior': {
        belts: [
            'White Belt or White Advanced Belt',
            'Yellow Belt or Yellow Advanced Belt',
            'Orange Belt or Orange Advanced Belt',
            'Green Belt or Green Advanced Belt',
            'Purple Belt or Purple Advanced Belt',
            'Blue Belt or Blue Advanced Belt',
            'Red Belt or Red Advanced Belt',
            'Brown Belt or Brown Advanced Belt',
            'Red & Black (Poom) Belt'
        ],
        questions: {
            'White Belt or White Advanced Belt': [
                { q: 'What does Tae Kwon Do mean in English?', a: 'The way of hand and foot, sir/ma\'am.' },
                { q: 'What should students do when they see a black belt?', a: 'Bow sir/ma\'am.' },
                { q: 'Why do we bow to black belts?', a: 'To show our respect, sir/ma\'am.' },
                { q: 'What is the meaning of the word "Respect"?', a: 'Treat others the way you want to be treated. Treat things the way you want your own things to be treated, sir/ma\'am.' },
                { q: 'Whom should we respect?', a: 'Everyone, sir/ma\'am.' },
                { q: 'Do you respond to your parents the first time they ask?', a: 'Yes sir/ma\'am.' }
            ],
            'Yellow Belt or Yellow Advanced Belt': [
                { q: 'Which country does Tae Kwon Do come from?', a: 'Korea, sir/ma\'am.' },
                { q: 'Count from one to ten in Korean?', a: 'Hana, Dool, Set, Net, Da-sut, Yuh-sut, Il-gup, Yuh-dul, Ah-hop, Yul.' },
                { q: 'How old is Tae Kwon Do?', a: 'Over 2000 years sir/ma\'am.' },
                { q: 'What is the meaning of the word, "Attitude"?', a: 'Attitude means how you choose to behave and think. It is the way you act toward others and handle different situations, showing respect, kindness, and a positive outlook, sir/ma\'am.' },
                { q: 'Do you have good attitude at home?', a: 'Yes sir/ma\'am.' },
                { q: 'Student Promise', a: 'Student answers with their own promise (for ex. I promise to work hard, I will never lie, I will become a black belt, etc.)' }
            ],
            'Orange Belt or Orange Advanced Belt': [
                { q: 'What are the five Tenets of Tae Kwon Do?', a: 'Courtesy, Integrity, Perseverance, Self-Control, and Indomitable Spirit, sir/ma\'am.' },
                { q: 'What is the meaning of the word "Commitment"?', a: 'Commitment means making a promise to do your best and not giving up, even when things are hard, sir/ma\'am.' },
                { q: 'Do you have commitment to becoming a better person?', a: 'Yes sir/ma\'am.' },
                { q: 'What is the meaning of the word "Practice"?', a: 'Practice means repeating something again and again so you can improve and do your best, sir/ma\'am.' },
                { q: 'Are you willing to practice to become a better person?', a: 'Yes sir/ma\'am.' },
                { q: 'Student Promise', a: 'Student answers with their own promise.' }
            ],
            'Green Belt or Green Advanced Belt': [
                { q: 'Recite Student Creed #1.', a: 'I will develop myself in a positive manner and avoid anything that would reduce my mental growth or physical health, sir/ma\'am.' },
                { q: 'What is your goal in Tae Kwon Do?', a: 'Student answers with their own goal.' },
                { q: 'Why is it important to achieve your goals and not give up?', a: 'It is important because goals help us improve, and not giving up teaches perseverance, sir/ma\'am.' },
                { q: 'What is the meaning of the word "Humble"?', a: 'Being humble means not bragging, respecting others, and knowing there is always more to learn, sir/ma\'am.' },
                { q: 'Why is it important to be humble?', a: 'Because humility helps us learn, respect others, and never misuse Tae Kwon Do, sir/ma\'am.' },
                { q: 'Do you help your parents or clean your room?', a: 'Yes sir/ma\'am.' },
                { q: 'Do you finish your homework on time?', a: 'Yes sir/ma\'am.' },
                { q: 'Student Promise', a: 'Student answers with their own promise.' }
            ],
            'Purple Belt or Purple Advanced Belt': [
                { q: 'Recite Student Creed #1 and #2.', a: 'I will develop myself in a positive manner and avoid anything that would reduce my mental growth or physical health. I will develop self-discipline in order to bring out the best in myself and others, sir/ma\'am.' },
                { q: 'What is perseverance?', a: 'Perseverance means never giving up, even when things are difficult, sir/ma\'am.' },
                { q: 'Why is perseverance important?', a: 'Because perseverance helps us reach our goals and become stronger mentally and physically, sir/ma\'am.' },
                { q: 'Why is it important to never misuse Tae Kwon Do?', a: 'Because Tae Kwon Do is for self-defense, discipline, and helping others—not for hurting people, sir/ma\'am.' },
                { q: 'What is self-control?', a: 'Self-control means controlling your actions, words, and emotions, sir/ma\'am.' },
                { q: 'Why is it important to have self-control?', a: 'Because self-control helps us make good choices and stay safe and respectful, sir/ma\'am.' },
                { q: 'Student Promise', a: 'Student answers with their own promise.' }
            ],
            'Blue Belt or Blue Advanced Belt': [
                { q: 'Recite Student Creed #1 through #3.', a: 'I will develop myself in a positive manner and avoid anything that would reduce my mental growth or physical health. I will develop self-discipline in order to bring out the best in myself and others. I will use what I learn in class constructively and defensively, to help myself and others and never be abusive or offensive, sir/ma\'am.' },
                { q: 'Count ranking from 1st to 10th in Korean.', a: 'Il, Ee, Sahm, Sah, Oh, Yook, Chil, Pahl, Koo, Sip, sir/ma\'am.' },
                { q: 'How has Tae Kwon Do training helped your life?', a: 'Student comes up with their own answer.' },
                { q: 'What is "Choice," and do you make good choices at home and school? How?', a: 'Choice means deciding between right and wrong. I make good choices by listening, being respectful, and following rules, sir/ma\'am.' },
                { q: 'What do you like most about Tae Kwon Do?', a: 'Student comes up with their own answer.' },
                { q: 'Are you a better person at home and school? How?', a: 'Yes sir/ma\'am. I listen better, show respect, and work harder.' },
                { q: 'Student Promise', a: 'Student answers with their own promise.' }
            ],
            'Red Belt or Red Advanced Belt': [
                { q: 'Recite the Student Oath.', a: 'I shall always tell the truth. I shall respect instructors and seniors. I will be a stronger person in front of a strong person and a weaker person in front of a weak person. I will never misuse Tae Kwon Do. Student Promise, sir/ma\'am.' },
                { q: 'How do you follow the Student Oath in your life?', a: 'Student provides their own answer.' },
                { q: 'What does it mean to be a leader?', a: 'Student provides their own answer.' },
                { q: 'What makes a good leader?', a: 'Student provides their own answer.' },
                { q: 'Recite the Composition of Tae Kwon Do.', a: 'Basic Techniques, Forms, Sparring, Breaking, and Attitude, sir/ma\'am.' },
                { q: 'What advice would you give to lower belts?', a: 'Student provides their own answer.' },
                { q: 'What was your goal when you started Tae Kwon Do?', a: 'Student provides their own answer.' },
                { q: 'Student Promise', a: 'Student answers with their own promise.' }
            ],
            'Brown Belt or Brown Advanced Belt': [
                { q: 'Recite the Ethical Rules of Tae Kwon Do.', a: 'Obedience to parents, respect for elders, faithful to friends, honesty to oneself and others, and always stay humble and never misuse your skills, sir/ma\'am.' },
                { q: 'How do you follow the Ethical Rules of Tae Kwon Do in your life?', a: 'Student provides their own answer.' },
                { q: 'Recite the Theory of Power.', a: 'Reaction Force, Concentration, Equilibrium, Breath Control, Speed, and Mass, sir/ma\'am.' },
                { q: 'What does earning a black belt mean to you, and why is it important?', a: 'Student provides their own answer.' },
                { q: 'Now that you are close to black belt, how do you carry yourself?', a: 'Student provides their own answer.' },
                { q: 'What is discipline?', a: 'Discipline means doing what is right even when it is hard, sir/ma\'am.' },
                { q: 'Why is discipline important?', a: 'Student provides their own answer.' },
                { q: 'Student Promise', a: 'Student answers with their own promise.' }
            ],
            'Red & Black (Poom) Belt': [
                { q: 'All previous questions (1–2 from each belt level)', a: 'Review all questions from white belt through brown advanced belt.' },
                { q: 'Do you carry yourself as a future black belt at home and school? How?', a: 'Student provides their own answer.' },
                { q: 'Student Promise', a: 'Student provides their own promise.' }
            ]
        }
    },
    'teen-adult': {
        belts: [
            'White Belt or White Advanced Belt',
            'Yellow Belt or Yellow Advanced Belt',
            'Green Belt',
            'Blue Belt',
            'Blue Advanced Belt',
            'Red Belt',
            'Red Advanced Belt',
            'Red & Black (Poom) Belt'
        ],
        questions: {
            'White Belt or White Advanced Belt': [
                { q: 'What does Tae Kwon Do mean in English?', a: 'The way of the hand and foot.' },
                { q: 'What should students do when they see a black belt?', a: 'Bow.' },
                { q: 'Why do we bow to black belts?', a: 'To show respect.' },
                { q: 'What is the meaning of the word "Respect"?', a: 'Treat others the way you want to be treated, and treat things the way you want your own things to be treated.' },
                { q: 'Who should we respect?', a: 'Everyone.' },
                { q: 'Do you respond to your parents the first time they ask? (Teen)', a: 'Yes.' }
            ],
            'Yellow Belt or Yellow Advanced Belt': [
                { q: 'Recite the Tenets of Tae Kwon Do.', a: 'Courtesy, Integrity, Perseverance, Self-Control, and Indomitable Spirit.' },
                { q: 'Which country does Tae Kwon Do come from?', a: 'Korea.' },
                { q: 'What is the capital of South Korea?', a: 'Seoul.' },
                { q: 'What does WT stand for?', a: 'World Taekwondo Federation.' },
                { q: 'Count from one to ten in Korean.', a: 'Hana, Dool, Set, Net, Dasut, Yasut, Eelgup, Yuduhl, Ahop, Yeol.' },
                { q: 'How old is Tae Kwon Do?', a: 'Over 2,000 years old.' },
                { q: 'Student Promise', a: 'Student provides their own promise.' }
            ],
            'Green Belt': [
                { q: 'Recite Student Creed #1.', a: 'I will develop myself in a positive manner and avoid anything that would reduce my mental growth or physical health.' },
                { q: 'What is your goal in Tae Kwon Do?', a: 'Student provides their own answer.' },
                { q: 'Why is it important to achieve your goals and not give up?', a: 'Because achieving goals builds discipline, confidence, and perseverance.' },
                { q: 'What is the meaning of the word "Humble"?', a: 'Being humble means not bragging, respecting others, and recognizing there is always more to learn.' },
                { q: 'Why is it important to be humble?', a: 'Because humility helps prevent misuse of skills and encourages respect and growth.' },
                { q: 'Do you help your parents or clean your room? (Teen)', a: 'Student provides their own answer.' },
                { q: 'Do you finish your homework on time? (Teen)', a: 'Student provides their own answer.' },
                { q: 'Student Promise', a: 'Student provides their own promise.' }
            ],
            'Blue Belt': [
                { q: 'Recite Student Creed #1 and #2.', a: 'I will develop myself in a positive manner and avoid anything that would reduce my mental growth or physical health. I will develop self-discipline in order to bring out the best in myself and others.' },
                { q: 'What is perseverance?', a: 'Perseverance means continuing to work toward your goal without giving up.' },
                { q: 'Why is perseverance important?', a: 'Because it allows you to overcome challenges and reach long-term goals.' },
                { q: 'Why is it important to never misuse Tae Kwon Do?', a: 'Because Tae Kwon Do is meant for self-defense, discipline, and personal growth—not harm.' },
                { q: 'What is self-control?', a: 'Self-control is the ability to manage your actions, emotions, and reactions.' },
                { q: 'Why is it important to have self-control?', a: 'Because it helps you make good decisions and act responsibly.' },
                { q: 'Student Promise', a: 'Student provides their own promise.' }
            ],
            'Blue Advanced Belt': [
                { q: 'Recite Student Creed #1 through #3.', a: 'I will develop myself in a positive manner and avoid anything that would reduce my mental growth or physical health. I will develop self-discipline in order to bring out the best in myself and others. I will use what I learn in class constructively and defensively, to help myself and others and never be abusive or offensive.' },
                { q: 'Count ranking from 1st to 10th in Korean.', a: 'Il, Ee, Sam, Sah, Oh, Yuk, Chil, Pahl, Koo, Sip.' },
                { q: 'How has Tae Kwon Do training helped your life?', a: 'Student provides their own answer.' },
                { q: 'Why is it always important to remain respectful?', a: 'Because respect builds trust, discipline, and strong relationships.' },
                { q: 'What do you like most about Tae Kwon Do?', a: 'Student provides their own answer.' },
                { q: 'Are you a better person at home? How?', a: 'Student provides their own answer.' },
                { q: 'Are you a better person at school or work? How?', a: 'Student provides their own answer.' },
                { q: 'Student Promise', a: 'Student provides their own promise.' }
            ],
            'Red Belt': [
                { q: 'Recite the Student Oath.', a: 'I shall always tell the truth. I shall respect instructors and seniors. I will be a stronger person in front of a strong person and a weaker person in front of a weak person. I will never misuse Tae Kwon Do. Student Promise.' },
                { q: 'How do you follow the Student Oath in your life?', a: 'Student provides their own answer.' },
                { q: 'What does it mean to be a leader?', a: 'Student provides their own answer.' },
                { q: 'What makes a good leader?', a: 'Student provides their own answer.' },
                { q: 'Recite the Composition of Tae Kwon Do.', a: 'Basic Techniques, Forms, Sparring, Breaking, and Attitude.' },
                { q: 'What advice would you give to lower belts?', a: 'Student provides their own answer.' },
                { q: 'What was your goal when you started learning Tae Kwon Do?', a: 'Student provides their own answer.' },
                { q: 'Student Promise', a: 'Student provides their own promise.' }
            ],
            'Red Advanced Belt': [
                { q: 'Recite the Ethical Rules of Tae Kwon Do.', a: 'Obedience to parents, respect for elders, faithfulness to friends, honesty to oneself and others, and always staying humble and never misusing your skills.' },
                { q: 'How do you follow the Ethical Rules of Tae Kwon Do in your life?', a: 'Student provides their own answer.' },
                { q: 'Recite the Theory of Power.', a: 'Reaction Force, Concentration, Equilibrium, Breath Control, Speed, and Mass.' },
                { q: 'What does earning a black belt mean to you, and why is it important?', a: 'Student provides their own answer.' },
                { q: 'Now that you are close to becoming a black belt, how do you carry yourself?', a: 'Student provides their own answer.' },
                { q: 'Student Promise', a: 'Student provides their own promise.' }
            ],
            'Red & Black (Poom) Belt': [
                { q: 'All previous questions (from white through red advanced belt)', a: 'Review all questions from previous belt levels.' },
                { q: 'Do you carry yourself as a black belt at home, school, and work? How?', a: 'Student provides their own answer.' },
                { q: 'Student Promise', a: 'Student provides their own promise.' }
            ]
        }
    }
};

// State management
let currentCategory = null;
let currentBelt = null;

// Function to get belt color and text color
function getBeltColors(beltName) {
    const name = beltName.toLowerCase();

    // Handle combined color belts for Tiny Tigers
    if (name.includes('white-yellow')) return { bg: 'linear-gradient(135deg, #ffffff 50%, #FFD700 50%)', text: '#000000' };
    if (name.includes('white-orange')) return { bg: 'linear-gradient(135deg, #ffffff 50%, #FF8C00 50%)', text: '#000000' };
    if (name.includes('white-green')) return { bg: 'linear-gradient(135deg, #ffffff 50%, #228B22 50%)', text: '#000000' };
    if (name.includes('white-purple')) return { bg: 'linear-gradient(135deg, #ffffff 50%, #8B008B 50%)', text: '#000000' };
    if (name.includes('white-blue')) return { bg: 'linear-gradient(135deg, #ffffff 50%, #1E90FF 50%)', text: '#000000' };
    if (name.includes('yellow-white')) return { bg: 'linear-gradient(135deg, #FFD700 50%, #ffffff 50%)', text: '#000000' };
    if (name.includes('yellow-orange')) return { bg: 'linear-gradient(135deg, #FFD700 50%, #FF8C00 50%)', text: '#000000' };
    if (name.includes('yellow-green')) return { bg: 'linear-gradient(135deg, #FFD700 50%, #228B22 50%)', text: '#000000' };
    if (name.includes('yellow-purple')) return { bg: 'linear-gradient(135deg, #FFD700 50%, #8B008B 50%)', text: '#ffffff' };
    if (name.includes('yellow-blue')) return { bg: 'linear-gradient(135deg, #FFD700 50%, #1E90FF 50%)', text: '#000000' };
    if (name.includes('orange-white')) return { bg: 'linear-gradient(135deg, #FF8C00 50%, #ffffff 50%)', text: '#000000' };
    if (name.includes('orange-yellow')) return { bg: 'linear-gradient(135deg, #FF8C00 50%, #FFD700 50%)', text: '#000000' };
    if (name.includes('orange-green')) return { bg: 'linear-gradient(135deg, #FF8C00 50%, #228B22 50%)', text: '#000000' };
    if (name.includes('orange-purple')) return { bg: 'linear-gradient(135deg, #FF8C00 50%, #8B008B 50%)', text: '#ffffff' };
    if (name.includes('orange-blue')) return { bg: 'linear-gradient(135deg, #FF8C00 50%, #1E90FF 50%)', text: '#000000' };

    // Solid color belts
    if (name.includes('white')) return { bg: '#ffffff', text: '#000000' };
    if (name.includes('yellow')) return { bg: '#FFD700', text: '#000000' };
    if (name.includes('orange')) return { bg: '#FF8C00', text: '#000000' };
    if (name.includes('green')) return { bg: '#228B22', text: '#ffffff' };
    if (name.includes('purple')) return { bg: '#8B008B', text: '#ffffff' };
    if (name.includes('blue')) return { bg: '#1E90FF', text: '#ffffff' };
    if (name.includes('red') && name.includes('black')) return { bg: 'linear-gradient(135deg, #DC143C 50%, #000000 50%)', text: '#ffffff' };
    if (name.includes('red')) return { bg: '#DC143C', text: '#ffffff' };
    if (name.includes('brown')) return { bg: '#8B4513', text: '#ffffff' };

    // Default
    return { bg: 'linear-gradient(135deg, #e00000 0%, #110000 100%)', text: '#ffffff' };
}

// Function to select category
function selectCategory(category) {
    currentCategory = category;
    showBeltSelection();
}

// Function to show belt selection
function showBeltSelection() {
    const main = document.querySelector('main');
    const categoryName = currentCategory === 'tiny-tigers' ? 'Tiny Tigers' :
                        currentCategory === 'junior' ? 'Junior' : 'Teen & Adult';

    main.innerHTML = `
        <div class="nav-container">
            <button class="back-btn" onclick="goHome()">← Back to Categories</button>
        </div>
        <h2 class="belt-title">${categoryName} - Select Your Current Belt</h2>
        <div class="button-grid" id="belt-buttons"></div>
    `;

    const beltButtonsContainer = document.getElementById('belt-buttons');
    const belts = studyData[currentCategory].belts;

    belts.forEach(belt => {
        const button = document.createElement('button');
        button.className = 'belt-btn';
        const colors = getBeltColors(belt);
        button.style.background = colors.bg;
        button.style.color = colors.text;
        button.innerHTML = `<span class="btn-text">${belt}</span>`;
        button.onclick = () => selectBelt(belt);
        beltButtonsContainer.appendChild(button);
    });
}

// Function to select belt and show questions
function selectBelt(belt) {
    currentBelt = belt;
    showQuestions();
}

// Function to display questions and answers
function showQuestions() {
    const main = document.querySelector('main');
    const categoryName = currentCategory === 'tiny-tigers' ? 'Tiny Tigers' :
                        currentCategory === 'junior' ? 'Junior' : 'Teen & Adult';

    main.innerHTML = `
        <div class="nav-container">
            <button class="back-btn" onclick="showBeltSelection()">← Back to Belt Selection</button>
            ${currentCategory !== 'tiny-tigers' ? '<button class="quiz-btn" onclick="startQuiz()">Start Quiz</button>' : ''}
        </div>
        <h2 class="belt-title">${categoryName} - ${currentBelt}</h2>
        <div class="questions-container" id="questions-container"></div>
    `;

    const questionsContainer = document.getElementById('questions-container');
    const questions = studyData[currentCategory].questions[currentBelt];

    questions.forEach((item, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';
        questionBlock.innerHTML = `
            <div class="question">Q${index + 1}. ${item.q}</div>
            <div class="answer"><strong>Answer:</strong> ${item.a}</div>
        `;
        questionsContainer.appendChild(questionBlock);
    });
}

// Function to go back home
function goHome() {
    currentCategory = null;
    currentBelt = null;
    window.location.reload();
}

// Quiz state
let quizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;

// Function to check if a question has a definitive answer (not student's own answer)
function hasDefinitiveAnswer(answer) {
    const studentAnswerPhrases = [
        'student provides',
        'student gives',
        'student comes up with',
        'student answers with',
        'student names any'
    ];
    return !studentAnswerPhrases.some(phrase => answer.toLowerCase().includes(phrase));
}

// Function to generate distractors (wrong answers) for multiple choice
function generateDistractors(correctAnswer, question, allQuestions) {
    const distractors = [];
    const questionLower = question.toLowerCase();

    // Generate similar but incorrect answers based on question type
    if (questionLower.includes('tae kwon do mean')) {
        distractors.push('The art of the flying kick and powerful strikes', 'The way of the peaceful warrior and meditation', 'The path of discipline, honor, and martial excellence');
    } else if (questionLower.includes('bow to black belts')) {
        distractors.push('To show fear and acknowledge their power', 'To acknowledge their rank and superior skill', 'Because it is tradition and required by the rules');
    } else if (questionLower.includes('whom should we respect') || questionLower.includes('who should we respect')) {
        distractors.push('Only black belts and instructors', 'Only adults and people older than us', 'Only our instructors and senior students');
    } else if (questionLower.includes('country') && questionLower.includes('tae kwon do')) {
        distractors.push('Japan', 'China', 'Thailand');
    } else if (questionLower.includes('capital of south korea')) {
        distractors.push('Tokyo', 'Beijing', 'Busan');
    } else if (questionLower.includes('wt stand for') || questionLower.includes('"wt"')) {
        distractors.push('World Taekwondo', 'World Training Federation', 'Worldwide Taekwondo Federation');
    } else if (questionLower.includes('how old') && questionLower.includes('tae kwon do')) {
        distractors.push('Over 1,000 years old', 'Over 500 years old', 'Over 3,000 years old');
    } else if (questionLower.includes('tenets')) {
        distractors.push('Courage, Integrity, Perseverance, Self-Control, and Indomitable Spirit',
                        'Courtesy, Honesty, Perseverance, Self-Control, and Indomitable Spirit',
                        'Courtesy, Integrity, Discipline, Self-Control, and Indomitable Spirit');
    } else if (questionLower.includes('respect') && questionLower.includes('mean')) {
        distractors.push('Always say please and thank you to everyone you meet',
                        'Listen to adults and follow all the rules they give you',
                        'Be kind to everyone you meet and never say anything mean');
    } else if (questionLower.includes('attitude') && questionLower.includes('mean')) {
        distractors.push('Attitude means being positive and happy all the time, never getting upset or sad, and always smiling',
                        'Attitude means how hard you work in class and how much effort you put into learning new techniques',
                        'Attitude means following all the rules, listening to your instructors, and doing what you are told to do');
    } else if (questionLower.includes('commitment') && questionLower.includes('mean')) {
        distractors.push('Commitment means showing up to class on time and wearing your uniform properly every single time',
                        'Commitment means listening to your instructors and following all their directions without asking questions',
                        'Commitment means working harder than everyone else and becoming the best student in your class');
    } else if (questionLower.includes('practice') && questionLower.includes('mean')) {
        distractors.push('Practice means going to every class and never missing a single training session at the dojang',
                        'Practice means watching other people do techniques and learning from what they do correctly',
                        'Practice means listening carefully to your instructor and memorizing everything they teach you in class');
    } else if (questionLower.includes('integrity') && questionLower.includes('mean')) {
        distractors.push('Doing your best in everything you try and never giving up on anything',
                        'Being brave and strong in difficult situations and standing up for yourself',
                        'Never giving up when things are hard and always finishing what you start');
    } else if (questionLower.includes('perseverance') && questionLower.includes('mean')) {
        distractors.push('Being strong and brave in difficult situations and never showing weakness',
                        'Working hard and practicing every day until you become a black belt',
                        'Being honest and truthful with everyone and never telling lies to anyone');
    } else if (questionLower.includes('self-control') && (questionLower.includes('mean') || questionLower.includes('what is'))) {
        distractors.push('Not getting angry or upset when things do not go the way you want them to',
                        'Controlling your body movements and having perfect balance in all your techniques',
                        'Following the rules at all times and doing exactly what your instructors tell you');
    } else if (questionLower.includes('humble') && questionLower.includes('mean')) {
        distractors.push('Being quiet and shy around other people and not talking very much to anyone',
                        'Not talking about yourself or your accomplishments and letting others speak first',
                        'Being polite and respectful to everyone you meet and using good manners always');
    } else if (questionLower.includes('courtesy') && questionLower.includes('mean')) {
        distractors.push('Being polite to everyone and always using your best manners in all situations',
                        'Helping others when they need it and being a good friend to everyone',
                        'Respecting your instructors and following all the rules of the dojang');
    } else if (questionLower.includes('goal in tae kwon do') || questionLower.includes('goal')) {
        distractors.push('Red belt and then continuing to train harder', 'Master instructor and opening my own school', 'Perfect technique in all my forms and sparring');
    } else if (questionLower.includes('charriot')) {
        distractors.push('Ready', 'Begin', 'Stop');
    } else if (questionLower.includes('kyong ne')) {
        distractors.push('Attention', 'Ready', 'Begin');
    } else if (questionLower.includes('indomitable spirit') && questionLower.includes('mean')) {
        distractors.push('Having a strong body and mind that can overcome any challenge or obstacle',
                        'Never showing fear or weakness to anyone even when you are scared inside',
                        'Always being confident and brave in everything you do without any doubt');
    } else if (questionLower.includes('choice') && questionLower.includes('mean')) {
        distractors.push('Choice means picking what you want to do and then doing it the best you can every time',
                        'Choice means thinking carefully before you act and making sure you follow all the rules',
                        'Choice means listening to your parents and instructors and doing what they tell you to do');
    } else if (questionLower.includes('discipline') && questionLower.includes('mean')) {
        distractors.push('Discipline means practicing every day and never missing class or taking breaks from training',
                        'Discipline means following all the rules and listening to your instructors at all times',
                        'Discipline means working harder than everyone else and always giving one hundred percent effort');
    } else if (questionLower.includes('student creed #1')) {
        distractors.push('I will develop self-discipline in order to bring out the best in myself and others',
                        'I will use what I learn in class constructively and defensively to help myself and others',
                        'I will respect my instructors and seniors at all times and follow all the rules of the dojang');
    } else if (questionLower.includes('student creed #2')) {
        distractors.push('I will develop myself in a positive manner and avoid anything that would reduce my mental growth',
                        'I will use what I learn in class constructively and defensively to help myself and others',
                        'I will always tell the truth and respect my instructors and seniors at all times');
    } else if (questionLower.includes('student creed #3')) {
        distractors.push('I will develop self-discipline in order to bring out the best in myself and others at all times',
                        'I will never misuse my Tae Kwon Do skills and always be respectful to everyone I meet',
                        'I will protect the weak and help others in need using my Tae Kwon Do training properly');
    } else if (questionLower.includes('student oath')) {
        distractors.push('I promise to always do my best, never give up on my goals, and become a black belt someday',
                        'I will respect my parents, listen to my instructors, and train hard every single day',
                        'I shall be honest with everyone, work hard in all I do, help others, and never misuse Tae Kwon Do');
    } else if (questionLower.includes('composition of tae kwon do')) {
        distractors.push('Forms, Sparring, Breaking, Self-Defense, and Attitude',
                        'Basic Techniques, Forms, Sparring, and Self-Defense',
                        'Kicks, Punches, Blocks, Forms, and Sparring');
    } else if (questionLower.includes('ethical rules')) {
        distractors.push('Honesty to parents, respect for teachers, faithful to friends, truthful to oneself and others',
                        'Obedience to instructors, respect for seniors, loyalty to friends, honesty to all people',
                        'Respect for parents, courtesy to elders, loyalty to friends, discipline to oneself and others');
    } else if (questionLower.includes('theory of power')) {
        distractors.push('Force, Speed, Concentration, Balance, Breath Control, and Mass',
                        'Reaction Force, Focus, Equilibrium, Breathing, Speed, and Weight',
                        'Power, Concentration, Balance, Breath Control, Speed, and Strength');
    } else if (questionLower.includes('why') && questionLower.includes('important')) {
        // For "why is it important" questions, skip them - they're asking for reasoning
        return null;
    } else if (questionLower.includes('count from one to ten') || questionLower.includes('count ranking') || questionLower.includes('name two') || questionLower.includes('sparring rules')) {
        // Don't quiz on counting or listing questions - too complex for multiple choice
        return null;
    } else if (questionLower.includes('do you') || questionLower.includes('are you') || questionLower.includes('have you')) {
        // Yes/No questions about personal behavior - skip these
        return null;
    } else {
        // For any other unhandled questions, don't generate a quiz
        return null;
    }

    // If we couldn't generate enough specific distractors, return null
    if (distractors.length < 3) {
        return null;
    }

    return distractors.slice(0, 3);
}

// Function to start the quiz
function startQuiz() {
    const questions = studyData[currentCategory].questions[currentBelt];

    // Filter questions with definitive answers AND that can generate good distractors
    quizQuestions = questions.filter(q => {
        if (!hasDefinitiveAnswer(q.a)) return false;
        const distractors = generateDistractors(q.a, q.q, questions);
        return distractors !== null;
    });

    if (quizQuestions.length === 0) {
        alert('No quiz questions available for this belt level.');
        return;
    }

    currentQuizIndex = 0;
    quizScore = 0;
    showQuizQuestion();
}

// Function to display a quiz question
function showQuizQuestion() {
    if (currentQuizIndex >= quizQuestions.length) {
        showQuizResults();
        return;
    }

    const main = document.querySelector('main');
    const categoryName = currentCategory === 'tiny-tigers' ? 'Tiny Tigers' :
                        currentCategory === 'junior' ? 'Junior' : 'Teen & Adult';

    const currentQuestion = quizQuestions[currentQuizIndex];
    const distractors = generateDistractors(currentQuestion.a, currentQuestion.q, quizQuestions);

    // Create array of all answers and shuffle
    const allAnswers = [currentQuestion.a, ...distractors];
    shuffleArray(allAnswers);

    main.innerHTML = `
        <div class="nav-container">
            <button class="back-btn" onclick="exitQuiz()">← Exit Quiz</button>
        </div>
        <h2 class="belt-title">${categoryName} - ${currentBelt} Quiz</h2>
        <div class="quiz-container">
            <div class="quiz-progress">Question ${currentQuizIndex + 1} of ${quizQuestions.length}</div>
            <div class="quiz-score">Score: ${quizScore} / ${currentQuizIndex}</div>
            <div class="quiz-question">
                <div class="question">${currentQuestion.q}</div>
                <div class="quiz-options" id="quiz-options">
                    ${allAnswers.map((answer, index) => `
                        <button class="quiz-option" onclick="checkAnswer('${escapeQuotes(answer)}', '${escapeQuotes(currentQuestion.a)}')">${answer}</button>
                    `).join('')}
                </div>
            </div>
            <div id="feedback" class="quiz-feedback"></div>
        </div>
    `;
}

// Helper function to escape quotes in strings for HTML
function escapeQuotes(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// Helper function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to check the answer
function checkAnswer(selectedAnswer, correctAnswer) {
    const feedbackDiv = document.getElementById('feedback');
    const optionsDiv = document.getElementById('quiz-options');
    const buttons = optionsDiv.querySelectorAll('.quiz-option');

    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);

    // Unescape quotes for comparison
    selectedAnswer = selectedAnswer.replace(/\\'/g, "'");
    correctAnswer = correctAnswer.replace(/\\'/g, "'");

    const isCorrect = selectedAnswer === correctAnswer;

    if (isCorrect) {
        quizScore++;
        feedbackDiv.innerHTML = `
            <div class="feedback-correct">
                ✓ Correct! Great job!
            </div>
            <button class="next-btn" onclick="nextQuestion()">Next Question →</button>
        `;
    } else {
        feedbackDiv.innerHTML = `
            <div class="feedback-incorrect">
                ✗ Incorrect. The correct answer is: <strong>${correctAnswer}</strong>
            </div>
            <button class="next-btn" onclick="nextQuestion()">Next Question →</button>
        `;
    }

    // Highlight correct and incorrect answers
    buttons.forEach(btn => {
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct-answer');
        } else if (btn.textContent === selectedAnswer && !isCorrect) {
            btn.classList.add('incorrect-answer');
        }
    });
}

// Function to move to next question
function nextQuestion() {
    currentQuizIndex++;
    showQuizQuestion();
}

// Function to show quiz results
function showQuizResults() {
    const main = document.querySelector('main');
    const categoryName = currentCategory === 'tiny-tigers' ? 'Tiny Tigers' :
                        currentCategory === 'junior' ? 'Junior' : 'Teen & Adult';

    const percentage = Math.round((quizScore / quizQuestions.length) * 100);
    let message = '';

    if (percentage >= 90) {
        message = 'Excellent! You have mastered this material!';
    } else if (percentage >= 70) {
        message = 'Good job! Keep practicing to improve further.';
    } else if (percentage >= 50) {
        message = 'You\'re making progress. Review the material and try again.';
    } else {
        message = 'Keep studying! Practice makes perfect.';
    }

    main.innerHTML = `
        <div class="nav-container">
            <button class="back-btn" onclick="showQuestions()">← Back to Study Guide</button>
        </div>
        <h2 class="belt-title">${categoryName} - ${currentBelt} Quiz Results</h2>
        <div class="quiz-results">
            <div class="results-score">
                <div class="score-big">${quizScore} / ${quizQuestions.length}</div>
                <div class="score-percentage">${percentage}%</div>
            </div>
            <div class="results-message">${message}</div>
            <div class="results-actions">
                <button class="quiz-btn" onclick="startQuiz()">Try Again</button>
                <button class="back-btn" onclick="showQuestions()">Back to Study Guide</button>
            </div>
        </div>
    `;
}

// Function to exit quiz
function exitQuiz() {
    if (confirm('Are you sure you want to exit the quiz? Your progress will be lost.')) {
        showQuestions();
    }
}
