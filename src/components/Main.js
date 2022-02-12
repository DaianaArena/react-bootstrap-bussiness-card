import React from "react"
import profile from "../images/profile-photo.jpeg"

export default function Main() {
    return (
        <div class="card bg-dark text-light .container-sm mt-5 mb-5">
            <img src={profile} alt="profile" class="card-img-top" />
            <div class="card-body">
                <h1 class="card-title text-center ">Daiana Arena</h1>
                <p class="card-title text-center text-uppercase text-warning  text-">Frontend Developer (ReactJS)</p>
            </div>

            <div class="card-body d-flex justify-content-around">

                <a href="mailto:darena@frba.utn.edu.ar" target="_blank" class="btn btn-light text-dark btn-lg">
                <i class="bi bi-envelope-fill m-1" ></i>
                Email
                </a>

                <a href="https://www.linkedin.com/in/arenadaiana/" target="_blank" class="btn btn-primary btn-lg">
                <i class="bi bi-linkedin m-1"></i>
                Linkedin
                </a>

            </div>

            <div class="card-body">
                <h3 class="card-title">About</h3>
                <p class="card-text">I am a frontend developer. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3 class="card-title">Interests</h3>
                <p class="card-text">Food expert. Reader. Internet fanatic. Geek. Coffee fanatic.</p>
            </div>

            <div class="card-body d-flex justify-content-center">
                <a href="https://github.com/DaianaArena" target="_blank" ><i class="bi bi-github text-secondary m-3"></i></a>
                <a href="https://www.behance.net/origenmkt" target="_blank"><i class="bi bi-behance text-secondary m-3"></i></a>
            </div>
        </div>

        )
}