import React from 'react';
import './menu1.css';

function Menu() {
    return (
        <div id="menu">
            <ul>
                <li>
                    <a href="#">Item 1</a>

                </li>
                <li>
                    <a href="#">Item 2</a>
                    <ul className="sub-menu">
                        <li> <a href="#">Item 2a</a></li>
                        <li> <a href="#">Item 2b</a></li>
                        <li> <a href="#">Item 2c</a></li>
                        <li> <a href="#">Item 2d</a></li>
                    </ul></li>
                <li> <a href="#">Item 3</a></li>
                <li> <a href="#">Item 4</a></li>
                <li> <a href="#">Item 5</a></li>
            </ul>
        </div>
    );
}

export default Menu;
