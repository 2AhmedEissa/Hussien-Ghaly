document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('task-list');

    const tasks = [
        { title: 'Transcribe Audio', description: 'Listen to audio and convert it to text.', reward: '$0.50' },
        { title: 'Label Images', description: 'Tag images with relevant keywords.', reward: '$0.30' },
        { title: 'Collect Audio Samples', description: 'Record short audio samples.', reward: '$0.70' }
    ];

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${task.title}</strong> - ${task.description} <br> <em>Reward: ${task.reward}</em>`;
        taskList.appendChild(li);
    });
});
