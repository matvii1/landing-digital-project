import './styles/main.scss'

const projects = [...document.querySelectorAll('.project')!]
const form = document.querySelector('.contact-us__form')!
const inputs = [
  ...document.querySelectorAll('.form__input')!,
] as HTMLInputElement[]

projects.forEach((project) => {
  project.addEventListener('mouseenter', () => {
    const overlay = project.querySelector('.project-overlay')!
    overlay.classList.add('transition-overlay')

    overlay.classList.add('project-overlay--active')
  })

  project.addEventListener('mouseleave', () => {
    const overlay = project.querySelector('.project-overlay')!

    overlay.classList.remove('project-overlay--active')
  })
})

form.addEventListener('submit', (e) => {
  e.preventDefault()

  inputs.forEach((input) => {
    input.value = ''
  })
})
