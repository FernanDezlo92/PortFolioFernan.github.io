import Projects from "../components/Projects";
import "../styles/viewProjects.css";

export default function ViewProjects() {
  return (
    <div>
      {/* Proyecto 1 con imagen a la izquierda y texto a la derecha */}
      <Projects
        numero={1}
        titulo="Academic Management"
        descripcion="School Academic Management Application for the management of students, teachers, events, etc."
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
        descripcionModal="It is based on building a school academic management
         application with CRUD operations for courses, students, teachers, subjects, and the generation of dynamic lists.
          All of this using PHP and its Laravel framework, Object-Oriented Programming (OOP), Model-View-Controller (MVC) pattern,
           a Content Management System (CMS), and MySQL database."
        urlVideo="./modalVideo/videoModelUno.mp4"
      />

      {/* Proyecto 2 con imagen a la derecha y texto a la izquierda */}
      <Projects
        numero={2}
        titulo="Weather Application"
        descripcion="With this application, you can find out the weather in any part of the world."
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
        descripcionModal="Application built in React using the OpenWeatherMap API,
         a reliable source of weather data. It is dedicated to learning how to use an API correctly,
          including searches, filters, and more. Throughout the application, powerful React tools such as Hooks,
           useEffect, and useState have been utilized, which are fundamental."
        urlVideo="./modalVideo/videoModelTres.mp4"
        invertido={false} // Nueva propiedad para invertir la disposición
      />
      <Projects
        numero={3}
        titulo="Weekly Planner"
        descripcion="Application dedicated to developing, implementing, and modifying the JavaScript language structure."
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
        descripcionModal="Application dedicated to developing, implementing, modifying,
         and optimizing the structure of the JavaScript language, both in web development on the client and server sides.
          It applies HTML, APIs like Drag and Drop, in addition to designing and implementing a GraphQL/Apollo API and accessing
           it through asynchronous client-server communication."
        urlVideo="./modalVideo/videoModelDos.mp4"
      />
      <Projects
        numero={4}
        titulo="Booking Application"
        descripcion="With this application, you can view available hotels and make a reservation for a specific date."
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
        descripcionModal="It is built in React and powered by React Router, Material-UI (MUI). Additionally, you can access data obtained from a local JSON through React Server. Explore and filter information with ease. Throughout the application, powerful React tools such as Hooks, useEffect, and useState have been used to enhance the experience."
        urlVideo="./modalVideo/videoModelCuatro.mp4"
        invertido={false} // Nueva propiedad para invertir la disposición
      />
    </div>
  );
}
