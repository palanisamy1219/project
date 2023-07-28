/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');
*{
    box-sizing: border-box;
} */

body{
    background-color: #f5f5f5;
    color: #444;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    /* font-family: 'Poppins', sans-serif; */
}
h1{
    color: #b383e2;
    font-size: 6rem;
    text-align: center;
    opacity: 0.4;
}
form{
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    width: 400px;
}
.input{
    border: none;
    color: #444;
    font-size: 1.8rem;
    padding: 1rem 2rem;
    display: block;
    width: 100%;
}
input::placeholder{
    color: #d5d5d5;
}
input:focus{
    outline: #b383e2;
}
.todos{
    background-color: white;
    padding: 0;
    list-style-type: none;
    margin: 0;
}
.todos li{
    border-top: 1px solid #e5e5e5;
    cursor: pointer;
    font-size: 1.3rem;
    padding: 1rem 2rem;
}
.todos li.completed{
    color: #b6b6b6;
    text-decoration: line-through;
}
small{
    color: #b5b5b5;
    margin-top: 3rem;
    text-align: center;
}