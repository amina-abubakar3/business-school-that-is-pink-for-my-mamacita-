// ===============================
//  LANGUAGE SUPPORT
//  To add Hausa or Fulani later: add an "ha" / "ff" entry inside
//  `ui` and next to each "en" text in `modules`, then set `lang`.
//  Anything not translated falls back to English.
// ===============================
let lang = localStorage.getItem('bs_lang') || 'en';

const ui = {
    en: {
        appTitle: 'The Business School',
        myLearning: 'My Learning',
        myBusiness: 'My Business',
        back: '← Back',
        backToModules: '← All modules',
        exit: '✕ Exit',
        start: 'Start',
        continueFrom: 'Continue from Lecture',
        startOver: 'Start over',
        previous: 'Previous',
        next: 'Next',
        finish: 'Finish',
        lectureOf: 'Lecture {n} of {total}',
        completed: '✓ Completed',
        inProgress: 'In progress',
        notStarted: 'Not started',
        bigIdea: 'Big idea',
        quickRecap: 'Quick Recap',
        comingSoon: 'The content for this lecture is coming soon.',
        saveLessonTitle: 'Save your progress?',
        saveLessonText: 'If you save, you will continue from this lecture when you come back. If you do not save, this module starts from the beginning.',
        saveProgress: 'Save progress',
        dontSave: "Don't save",
        keepGoing: 'Keep going',
        businessTracker: 'My Business Tracker',
        totalSales: 'Total Sales',
        totalExpenses: 'Total Expenses',
        netProfit: 'Net Profit/Loss',
        addTransaction: 'Add New Transaction',
        itemLabel: 'Item/Description:',
        amountLabel: 'Amount(₦):',
        typeLabel: 'Type:',
        addEntry: 'Add Entry',
        recent: 'Recent Transactions',
        saveBizTitle: 'Save your records?',
        saveBizText: 'If you save, everything you entered is kept for next time. If you do not save, the changes you made in this visit are removed.',
        saveRecords: 'Save records',
        discard: "Don't save",
        invalidInput: 'Please enter a valid description and amount.',
        profitMsg: 'You are making a profit. Well done!',
        lossMsg: 'You are making a loss. Check where your money is going.',
        evenMsg: 'You are breaking even.'
    }
};

function t(key) {
    return (ui[lang] && ui[lang][key]) || ui.en[key] || key;
}
function tr(obj) {            // for content objects like { en: '...', ha: '...' }
    return obj[lang] || obj.en;
}
function applyLanguage() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
}

// ===============================
//  LEARNING CONTENT
//  Each lecture has a title and a body.
//  Body items: a plain string = paragraph,
//  { list: [...] } = bullet list, { olist: [...] } = numbered list,
//  { heading: '...' } = small heading, { note: '...' } = bold note.
//  An empty body shows "coming soon" - just fill it in when ready.
// ===============================
const modules = [
    {
        id: 1,
        title: { en: "Module 1: Introduction to Business" },
        bigIdea: { en: "A business is a team of people who make or sell something that others need or want." },
        lectures: [
            { title: { en: "What is Business?" }, body: { en: ["A business sells things (like toys or snacks) or services (like haircuts or tutoring) to people.", "Its purpose is to solve a problem or make people happy, and to earn money so it can keep going.", "Example: A lemonade stand solves the problem \"I'm thirsty!\""] } },
            { title: { en: "Types of Businesses" }, body: { en: [{"list": ["Sole proprietorship: One person owns and runs it. (A kid who walks dogs for neighbors.)", "Partnership: Two or more people share the work and the profits. (Two friends selling cookies together.)", "Corporation: A big business owned by many people who hold \"shares.\" It is treated like its own \"person\" under the law.", "LLC: A mix of both. It's easy to run, and your personal stuff (like your house) stays safe if the business has trouble."]}] } },
            { title: { en: "The Business Environment" }, body: { en: [{"list": ["Inside factors (things the business controls): its workers, its money, its rules, its products.", "Outside factors (things it can't control): the weather, the economy, new laws, competitors, what customers like."]}, {"note": "Smart businesses keep an eye on both."}] } }
        ]
    },
    {
        id: 2,
        title: { en: "Module 2: Marketing – Reaching Your Customers" },
        bigIdea: { en: "Marketing is how people find out about your product and decide they want it." },
        lectures: [
            { title: { en: "The Marketing Mix (the 4 Ps)" }, body: { en: [{"list": ["Product: What are you selling?", "Price: How much does it cost?", "Place: Where can people buy it? (A shop? Online?)", "Promotion: How do you tell people about it? (Ads, posters, videos)"]}] } },
            { title: { en: "Market Research and Target Audience" }, body: { en: ["Market research means asking questions to learn what people want.", "Your target audience is the group of people most likely to buy from you.", "Example: A skateboard shop's target audience is probably teens, not grandparents."] } },
            { title: { en: "Digital Marketing" }, body: { en: [{"list": ["SEO: Helping your website show up near the top when people search on Google.", "Social media: Sharing posts and videos where people hang out online.", "Content marketing: Making helpful or fun things (blogs, videos) so people trust you and come to you."]}] } },
            { title: { en: "Branding and Customer Relationships" }, body: { en: ["Your brand is how people recognize and feel about you: your name, logo, colors, and promise.", "Customer relationship management means treating customers well so they come back and tell their friends."] } }
        ]
    },
    {
        id: 3,
        title: { en: "Module 3: Finance and Accounting – The Numbers Behind Business" },
        bigIdea: { en: "Money is the scoreboard of a business. You have to keep track of it." },
        lectures: [
            { title: { en: "Financial Statements" }, body: { en: [{"list": ["Balance sheet: A snapshot of what the business owns and owes today.", "Income statement: Shows how much money came in and went out over time, and whether there was a profit.", "Cash flow statement: Shows where the actual cash moved, like checking your wallet."]}] } },
            { title: { en: "Basic Accounting Principles" }, body: { en: [{"list": ["Assets: Things the business owns (cash, equipment).", "Liabilities: Things the business owes (loans, bills).", "Equity: What's left for the owners after paying what's owed."]}, {"note": "Simple formula: Assets = Liabilities + Equity"}] } },
            { title: { en: "Financial Analysis (Key Ratios)" }, body: { en: ["Ratios are like report-card grades for a business.", "They help us see if the business is making enough profit, can pay its bills, and isn't borrowing too much."] } },
            { title: { en: "Budgeting and Financial Planning" }, body: { en: ["A budget is a plan for how to spend and save money.", "Like planning your pocket money: some for needs, some for fun, some saved for later.", "Good planning helps a business avoid running out of money."] } }
        ]
    },
    {
        id: 4,
        title: { en: "Module 4: Operations Management – Streamlining Business Processes" },
        bigIdea: { en: "Operations is how a business actually gets things made and delivered, smoothly and without waste." },
        lectures: [
            { title: { en: "Supply Chain Management" }, body: { en: ["A supply chain is the journey of a product: getting materials, making the product, then delivering it to you.", "Think of a pizza: flour and cheese arrive, the pizza is made, then a driver brings it to your door."] } },
            { title: { en: "Quality Control and Process Improvement" }, body: { en: ["Quality control means checking products so they're good before customers get them.", "Process improvement means always finding better, faster ways to do things."] } },
            { title: { en: "Inventory Management and Production Planning" }, body: { en: ["Inventory is the stuff a business has in stock.", "Too little means customers go away disappointed. Too much wastes money and space.", "Production planning decides what to make, how much, and when."] } },
            { title: { en: "Lean Management and Six Sigma" }, body: { en: [{"list": ["Lean: Cut out waste (wasted time, wasted materials, wasted steps).", "Six Sigma: A method to make almost zero mistakes."]}, "Together they help businesses work faster and better."] } }
        ]
    },
    {
        id: 5,
        title: { en: "Module 5: Management and Leadership – Guiding Your Team" },
        bigIdea: { en: "A good leader helps a team do great things together." },
        lectures: [
            { title: { en: "Leadership Styles" }, body: { en: [{"list": ["Autocratic: The leader makes all the decisions alone.", "Democratic: The leader asks the team and they decide together.", "Laissez-faire: The leader lets the team do things their own way.", "Transformational: The leader inspires the team with a big vision and helps everyone grow."]}] } },
            { title: { en: "Motivation Theories" }, body: { en: [{"list": ["Maslow's Hierarchy: People first need the basics (food, safety), then friends and respect, and finally the chance to be their best.", "Herzberg's Two-Factor Theory: Some things stop people from being unhappy at work (fair pay, safe place). Other things make them truly excited (praise, interesting work, chances to grow)."]}] } },
            { title: { en: "Building High-Performance Teams" }, body: { en: ["Great teams collaborate (work together) and communicate (share ideas clearly and listen).", "Everyone knows their role and trusts each other."] } },
            { title: { en: "Decision-Making and Problem-Solving" }, body: { en: [{"olist": ["Spot the problem.", "Think of different solutions.", "Compare the pros and cons.", "Pick one and try it.", "Check if it worked."]}] } }
        ]
    },
    {
        id: 6,
        title: { en: "Module 6: Entrepreneurship – Turning Ideas into Reality" },
        bigIdea: { en: "An entrepreneur is someone who spots a good idea and builds a business from it." },
        lectures: [
            { title: { en: "The Entrepreneurial Mindset" }, body: { en: ["Successful founders are curious, brave, creative, and hard-working.", "They don't give up when they fail. They learn and try again."] } },
            { title: { en: "Business Planning" }, body: { en: ["A business plan is a roadmap. It says what you'll sell, who will buy it, how you'll earn money, and what your goals are."] } },
            { title: { en: "Funding Options" }, body: { en: [{"list": ["Bootstrapping: Using your own savings to start.", "Angel investors: Wealthy people who give money to help a new business in exchange for a small piece of it.", "Venture capital: Companies that invest large amounts in startups they think will grow very big."]}] } },
            { title: { en: "Marketing and Growing Your Startup" }, body: { en: ["Start by finding your first customers and listening to them.", "Use what you learn to improve, then spread the word and grow step by step."] } }
        ]
    },
    {
        id: 7,
        title: { en: "Module 7: Business Ethics and Corporate Social Responsibility (CSR)" },
        bigIdea: { en: "Good businesses don't just make money. They do the right thing too." },
        lectures: [
            { title: { en: "Corporate Social Responsibility" }, body: { en: ["CSR means a business cares about people and the planet, not only profits.", "Examples: giving to charity, treating workers fairly, protecting nature."] } },
            { title: { en: "Sustainability and the Triple Bottom Line" }, body: { en: ["Sustainability means doing business in a way that doesn't use up the Earth's resources for future generations.", "Triple Bottom Line means measuring success in 3 ways: People, Planet, and Profit."] } },
            { title: { en: "Ethical Leadership and Values-Driven Organizations" }, body: { en: ["An ethical leader is honest, fair, and does the right thing even when nobody is watching.", "A values-driven business has clear beliefs (like honesty and kindness) that guide every decision."] } }
        ]
    }
];

const recap = { en: ["Business solves problems for customers.", "Marketing helps people find you.", "Finance tracks the money.", "Operations makes things run smoothly.", "Leadership guides the team.", "Entrepreneurship turns ideas into businesses.", "Ethics means doing good while doing business."] };

// ===============================
//  SAFE STORAGE HELPERS
// ===============================
function load(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
        return fallback;
    }
}
function save(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) { /* storage unavailable: app still works for this visit */ }
}

// ===============================
//  SCREEN NAVIGATION
// ===============================
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    window.scrollTo(0, 0);
}

document.querySelectorAll('[data-go]').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.go;
        if (target === 'learning-screen') renderModuleList();
        showScreen(target);
    });
});

// ===============================
//  SAVE / DON'T SAVE PROMPT
// ===============================
function askToSave({ title, text, yesLabel, noLabel, cancelLabel, onYes, onNo }) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-text').textContent = text;
    const yes = document.getElementById('modal-yes');
    const no = document.getElementById('modal-no');
    const cancel = document.getElementById('modal-cancel');
    yes.textContent = yesLabel;
    no.textContent = noLabel;
    cancel.textContent = cancelLabel;

    const close = () => modal.classList.add('hidden');
    yes.onclick = () => { close(); onYes(); };
    no.onclick = () => { close(); onNo(); };
    cancel.onclick = close;
    modal.classList.remove('hidden');
}

// ===============================
//  MY LEARNING
// ===============================
// learning = { progress: { moduleId: lectureIndex }, done: [moduleId, ...] }
let learning = load('bs_learning', { progress: {}, done: [] });
let currentModule = null;
let currentIndex = 0;

function renderRecap() {
    const box = document.getElementById('recap');
    box.innerHTML = '';
    const h = document.createElement('h3');
    h.textContent = t('quickRecap');
    const ul = document.createElement('ul');
    tr(recap).forEach(line => {
        const li = document.createElement('li');
        li.textContent = line;
        ul.appendChild(li);
    });
    box.append(h, ul);
}

function renderModuleList() {
    renderRecap();
    const list = document.getElementById('module-list');
    list.innerHTML = '';
    modules.forEach(mod => {
        const btn = document.createElement('button');
        btn.className = 'module-card';

        const name = document.createElement('span');
        name.textContent = tr(mod.title);

        const status = document.createElement('span');
        status.className = 'module-status';
        if (learning.done.includes(mod.id)) {
            status.textContent = t('completed');
            status.classList.add('done');
        } else if (learning.progress[mod.id] !== undefined) {
            status.textContent = t('inProgress');
        } else {
            status.textContent = t('notStarted');
        }

        btn.append(name, status);
        btn.addEventListener('click', () => openModule(mod.id));
        list.appendChild(btn);
    });
}

function openModule(id) {
    currentModule = modules.find(m => m.id === id);
    document.getElementById('module-title').textContent = tr(currentModule.title);
    document.getElementById('module-idea').textContent = t('bigIdea') + ': ' + tr(currentModule.bigIdea);

    const saved = learning.progress[id];
    const ol = document.getElementById('lecture-list');
    ol.innerHTML = '';
    currentModule.lectures.forEach((lec, i) => {
        const li = document.createElement('li');
        li.textContent = tr(lec.title);
        if (learning.done.includes(id) || (saved !== undefined && i < saved)) {
            li.classList.add('done');
        }
        ol.appendChild(li);
    });

    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    if (saved !== undefined) {
        startBtn.textContent = `${t('continueFrom')} ${saved + 1}`;
        restartBtn.classList.remove('hidden');
    } else {
        startBtn.textContent = t('start');
        restartBtn.classList.add('hidden');
    }
    showScreen('module-screen');
}

document.getElementById('start-btn').addEventListener('click', () => {
    const saved = learning.progress[currentModule.id];
    startLesson(saved !== undefined ? saved : 0);
});

document.getElementById('restart-btn').addEventListener('click', () => {
    delete learning.progress[currentModule.id];
    save('bs_learning', learning);
    startLesson(0);
});

function startLesson(index) {
    currentIndex = index;
    renderLesson();
    showScreen('lesson-screen');
}

function renderBody(container, items) {
    container.innerHTML = '';
    if (!items || items.length === 0) {
        const p = document.createElement('p');
        p.textContent = t('comingSoon');
        container.appendChild(p);
        return;
    }
    items.forEach(item => {
        if (typeof item === 'string') {
            const p = document.createElement('p');
            p.textContent = item;
            container.appendChild(p);
        } else if (item.list || item.olist) {
            const el = document.createElement(item.list ? 'ul' : 'ol');
            (item.list || item.olist).forEach(text => {
                const li = document.createElement('li');
                li.textContent = text;
                el.appendChild(li);
            });
            container.appendChild(el);
        } else if (item.heading) {
            const h = document.createElement('h4');
            h.textContent = item.heading;
            container.appendChild(h);
        } else if (item.note) {
            const p = document.createElement('p');
            p.className = 'lesson-note';
            p.textContent = item.note;
            container.appendChild(p);
        }
    });
}

function renderLesson() {
    const total = currentModule.lectures.length;
    const lecture = currentModule.lectures[currentIndex];

    document.getElementById('lesson-progress').textContent =
        tr(currentModule.title) + ' • ' +
        t('lectureOf').replace('{n}', currentIndex + 1).replace('{total}', total);
    document.getElementById('lesson-title').textContent = tr(lecture.title);
    renderBody(document.getElementById('lesson-body'), lecture.body[lang] || lecture.body.en);

    document.getElementById('prev-btn').disabled = currentIndex === 0;
    document.getElementById('next-btn').textContent =
        currentIndex === total - 1 ? t('finish') : t('next');
    window.scrollTo(0, 0);
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderLesson();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    const total = currentModule.lectures.length;
    if (currentIndex < total - 1) {
        currentIndex++;
        renderLesson();
    } else {
        // Finished the whole module
        delete learning.progress[currentModule.id];
        if (!learning.done.includes(currentModule.id)) learning.done.push(currentModule.id);
        save('bs_learning', learning);
        openModule(currentModule.id);
    }
});

document.getElementById('exit-lesson').addEventListener('click', () => {
    askToSave({
        title: t('saveLessonTitle'),
        text: t('saveLessonText'),
        yesLabel: t('saveProgress'),
        noLabel: t('dontSave'),
        cancelLabel: t('keepGoing'),
        onYes: () => {
            learning.progress[currentModule.id] = currentIndex;
            save('bs_learning', learning);
            renderModuleList();
            showScreen('learning-screen');
        },
        onNo: () => {
            delete learning.progress[currentModule.id];   // reset this module
            save('bs_learning', learning);
            renderModuleList();
            showScreen('learning-screen');
        }
    });
});

// ===============================
//  MY BUSINESS
// ===============================
const form = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeSelect = document.getElementById('type');
const transactionList = document.getElementById('transaction-list');
const totalSalesEl = document.getElementById('total-sales');
const totalExpensesEl = document.getElementById('total-expenses');
const netProfitEl = document.getElementById('net-profit');
const profitMessageEl = document.getElementById('profit-message');

// transactions = [{ id, description, amount, type }]
let savedTransactions = load('bs_transactions', []);       // what is saved on the device
let transactions = savedTransactions.slice();              // what she is working on now

const naira = n => '₦' + n.toLocaleString();

function updateSummary() {
    let totalSales = 0;
    let totalExpenses = 0;
    transactions.forEach(tx => {
        if (tx.type === 'sale') totalSales += tx.amount;
        else totalExpenses += tx.amount;
    });
    const netProfit = totalSales - totalExpenses;

    totalSalesEl.textContent = naira(totalSales);
    totalExpensesEl.textContent = naira(totalExpenses);
    netProfitEl.textContent = naira(netProfit);

    if (netProfit > 0) {
        netProfitEl.style.color = '#2e7d32';
        profitMessageEl.textContent = t('profitMsg');
    } else if (netProfit < 0) {
        netProfitEl.style.color = '#c62828';
        profitMessageEl.textContent = t('lossMsg');
    } else {
        netProfitEl.style.color = '#333333';
        profitMessageEl.textContent = transactions.length ? t('evenMsg') : '';
    }
}

function renderTransactions() {
    transactionList.innerHTML = '';
    transactions.forEach(tx => {
        const li = document.createElement('li');

        const desc = document.createElement('span');
        desc.textContent = tx.description;          // textContent: safe from HTML injection

        const right = document.createElement('div');
        const amt = document.createElement('span');
        amt.className = tx.type === 'sale' ? 'amount-sale' : 'amount-expense';
        amt.textContent = (tx.type === 'sale' ? '+' : '-') + naira(tx.amount);

        const del = document.createElement('button');
        del.className = 'delete-btn';
        del.textContent = '✕';
        del.setAttribute('aria-label', 'Delete');
        del.addEventListener('click', () => {
            transactions = transactions.filter(x => x.id !== tx.id);
            renderTransactions();
            updateSummary();
        });

        right.append(amt, del);
        li.append(desc, right);
        transactionList.appendChild(li);
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const type = typeSelect.value;

    if (description === '' || isNaN(amount) || amount <= 0) {
        alert(t('invalidInput'));
        return;
    }

    transactions.push({ id: Date.now() + Math.random(), description, amount, type });
    renderTransactions();
    updateSummary();
    form.reset();
});

document.getElementById('exit-business').addEventListener('click', () => {
    askToSave({
        title: t('saveBizTitle'),
        text: t('saveBizText'),
        yesLabel: t('saveRecords'),
        noLabel: t('discard'),
        cancelLabel: t('keepGoing'),
        onYes: () => {
            savedTransactions = transactions.slice();
            save('bs_transactions', savedTransactions);
            showScreen('home-screen');
        },
        onNo: () => {
            transactions = savedTransactions.slice();   // go back to the last saved records
            renderTransactions();
            updateSummary();
            showScreen('home-screen');
        }
    });
});

// ===============================
//  HOME BUTTONS + START
// ===============================
document.getElementById('open-learning').addEventListener('click', () => {
    renderModuleList();
    showScreen('learning-screen');
});
document.getElementById('open-business').addEventListener('click', () => {
    renderTransactions();
    updateSummary();
    showScreen('business-screen');
});

applyLanguage();
showScreen('home-screen');

// Lets the app install on a phone and open offline
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js').catch(() => {});
    });
}
