
document.getElementById('addAgentBtn').addEventListener('click', ()=> {
  document.getElementById('modal').classList.remove('hidden');
});
document.getElementById('closeModal').addEventListener('click', ()=> {
  document.getElementById('modal').classList.add('hidden');
});
document.getElementById('createAgent').addEventListener('click', ()=> {
  const name = document.getElementById('agentName').value || 'NewAgent';
  const role = document.getElementById('roleType').value;
  const list = document.getElementById('agentList');
  const li = document.createElement('li');
  li.className='agent';
  li.innerHTML = `${name} <span class="badge">Idle</span>`;
  list.appendChild(li);
  document.getElementById('modal').classList.add('hidden');
  // Add feed item
  const feed = document.getElementById('feed');
  const div = document.createElement('div');
  div.className='feed-item';
  div.innerHTML = `<strong>${name}</strong>: Created as a ${role} agent.`;
  feed.prepend(div);
});
