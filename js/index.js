const portfolio = document.getElementById('portfolio');
const projects = portfolio.querySelectorAll('.project');

projects.forEach((project) => project.addEventListener('mouseover', (e) => {
  e.preventDefault;

  const cover = document.getElementById(`cover-${project.id}`);
  const see = document.getElementById(`see-${project.id}`);

  cover.classList.add('hidden');
  see.classList.remove('hidden');
}));

projects.forEach((project) => project.addEventListener('mouseout', (e) => {
  e.preventDefault;

  const cover = document.getElementById(`cover-${project.id}`);
  const see = document.getElementById(`see-${project.id}`);

  cover.classList.remove('hidden');
  see.classList.add('hidden');
}));

const Show_FV = (id) => {
  const fvProject = document.getElementById(`fv-${id}`);

  fvProject.classList.remove('hidden','hide_fv');
  fvProject.classList.add('show_fv');
};

const Hide_FV = (id) => {
  const fvProject = document.getElementById(`fv-${id}`);

  fvProject.classList.remove('show_fv');
  fvProject.classList.add('hide_fv');
  setTimeout(function(){fvProject.classList.add('hidden')}, 400);
}
