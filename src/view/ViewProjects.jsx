import Projects from "../components/Projects";
import "../styles/viewProjects.css";

export default function ViewProjects() {
  return (
    <div>
      {/* Proyecto 1 con imagen a la izquierda y texto a la derecha */}
      <Projects
        numero={1}
        titulo="Gestión Académica"
        descripcion="Aplicación de gestión académica escolar, para la gestión de alumnos, docentes, actos, etc."
        skills={
          <>
            <img src="./img/skillsIMG/php.png" className="cardIcon" alt="php" />
            <img
              src="./img/skillsIMG/laravel.png"
              className="cardIcon"
              alt="laravel"
            />
            <img
              src="./img/skillsIMG/mysql.png"
              className="cardIcon"
              alt="mysql"
            />
            <img
              src="./img/skillsIMG/ballena.png"
              className="cardIcon"
              alt="ballena"
            />
          </>
        }
        links="https://github.com/FernanDezlo92/PHPLaravelPrd4"
        img={[
          <img
            key="img1"
            src="./img/ProjectosIMG/GestionIpad1.png"
            alt=""
            className="imagenesPro"
          />,
          <img
            key="img2"
            src="./img/ProjectosIMG/GestionIpad2.png"
            alt=""
            className="imagenesPro"
          />,
          <img
            key="img3"
            src="./img/ProjectosIMG/GestionOrdenador3.png"
            alt=""
            className="imagenesPro"
          />,
        ]}
        descripcionModal="Se basa en la construcción de una aplicación de gestión académica
            escolar, con operaciones CRUD de cursos, estudiantes, profesores,
            asignaturas, y la generación de listados dinámicos. Todo ello con
            PHP y su framework Laravel, POO, MVC, CMS y el uso de la base de
            datos MySQL."
        urlVideo="./modalVideo/videoModelUno.mp4"
      />

      {/* Proyecto 2 con imagen a la derecha y texto a la izquierda */}
      <Projects
        numero={2}
        titulo="Aplicación del tiempo"
        descripcion="Con esta aplicación podrás saber el tiempo que hace en cualquier parte
        del mundo."
        skills={
          <>
            <img src="./img/skillsIMG/js.png" className="cardIcon" alt="HTML" />
            <img
              src="./img/skillsIMG/react-logo.png"
              className="cardIcon"
              alt="HTML"
            />
            <img
              src="./img/skillsIMG/html.png"
              className="cardIcon"
              alt="HTML"
            />
            <img
              src="./img/skillsIMG/css-3.png"
              className="cardIcon"
              alt="HTML"
            />
          </>
        }
        links="https://github.com/FernanDezlo92/WeatherApp"
        img={[
          <img
            key="img3"
            src="./img/ProjectosIMG/weatherOrdenador3.png"
            alt=""
            className="imagenesPro"
          />,
          <img
            key="img1"
            src="./img/ProjectosIMG/weatherIpad1.png"
            alt=""
            className="imagenesPro"
          />,
        ]}
        descripcionModal="Aplicación elaborada en React y con la API de OpenWeatherMap, una
            fuente confiable de datos meteorológicos. Dedicado a aprender a usar
            una APi correctamente, las búsquedas, los filtros, etc. A través de
            la aplicación se ha usado potentes herramientas de React, como los
            Hooks, useEffect y useState, que son fundamentales."
        urlVideo="./modalVideo/videoModelTres.mp4"
        invertido={false} // Nueva propiedad para invertir la disposición
      />
      <Projects
        numero={3}
        titulo="Agenda Semanal"
        descripcion="Aplicacion dedicada a desarrollar, implementar, modificar la
        estructura del lenguaje JavaScript."
        skills={
          <>
            <img src="./img/skillsIMG/js.png" className="cardIcon" alt="HTML" />
            <img
              src="./img/skillsIMG/graphql.png"
              className="cardIcon"
              alt="HTML"
            />
            <img
              src="./img/skillsIMG/letra-b.png"
              className="cardIcon"
              alt="HTML"
            />
            <img
              src="./img/skillsIMG/nodejs.png"
              className="cardIcon"
              alt="HTML"
            />
          </>
        }
        links="https://github.com/FernanDezlo92/JSProducto4"
        img={[
          <img
            key="img2"
            src="./img/ProjectosIMG/todoIpad1.png"
            alt=""
            className="imagenesPro"
          />,
          <img
            key="img1"
            src="./img/ProjectosIMG/todoIpad2.png"
            alt=""
            className="imagenesPro"
          />,
          <img
            key="img3"
            src="./img/ProjectosIMG/todoOrdenador3.png"
            alt=""
            className="imagenesPro"
          />,
        ]}
        descripcionModal="Aplicacion dedicada a desarrollar, implementar, modificar y
            optimizar la estructura del lenguaje JavaScript, tanto en el
            desarrollo web del lado Cliente como en el lado Servidor, aplica
            HTML, apis como Drag and Drop, además de diseñar e implementar una
            API GraphQL/APollo y acceder a ella mediante una comunicación
            asíncrona cliente-servidor."
        urlVideo="./modalVideo/videoModelDos.mp4"
      />
      <Projects
        numero={4}
        titulo="Aplicación de Booking"
        descripcion="Con esta aplicación podrás ver los hoteles disponibles y reservar un
        día concreto."
        skills={
          <>
            <img
              src="./img/skillsIMG/react-logo.png"
              className="cardIcon"
              alt="HTML"
            />
            <img
              src="./img/skillsIMG/mui.png"
              className="cardIcon"
              alt="HTML"
            />
            <img src="./img/skillsIMG/js.png" className="cardIcon" alt="HTML" />
            <img
              src="./img/skillsIMG/css-3.png"
              className="cardIcon"
              alt="HTML"
            />
          </>
        }
        links="https://github.com/FernanDezlo92/Booking-App"
        img={[
          <img
            key="img1"
            src="./img/ProjectosIMG/bookOrdenador3.png"
            alt=""
            className="imagenesPro"
          />,
          <img
            key="img2"
            src="./img/ProjectosIMG/bookIpad1.png"
            alt=""
            className="imagenesPro"
          />,
          <img
            key="img3"
            src="./img/ProjectosIMG/bookIpad2.png"
            alt=""
            className="imagenesPro"
          />,
        ]}
        descripcionModal="Esta construida en React y potenciada por React Router, Materia-UI
            (MUI). Además puedes acceder a los datos obtenidos de un JSON local
            a traves de React Server. Explora y filtra información con
            facilidad. A través de la aplicación se ha usado potentes
            herramientas de React, como los Hooks, useEffect y useState, para
            potenciar la experiencia."
        urlVideo="./modalVideo/videoModelCuatro.mp4"
        invertido={false} // Nueva propiedad para invertir la disposición
      />
    </div>
  );
}
