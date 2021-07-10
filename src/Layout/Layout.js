import React from 'react';
import './layout.css';
import './normalize.css';

function Layout() {
    return (
        <body >
            <div id="container">
                <div id="menu">
                    <ul>
                        <li><a href="#">Trang Chủ</a></li>
                        <li>
                            <a href="#">Dịch Vụ</a>
                            <ul className="sub-menu">
                                <li> <a href="#">Chơi</a></li>
                                <li> <a href="#">Ăn uống</a></li>
                                <li> <a href="#">Tắm</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Hỏi Đáp</a></li>
                        <li><a href="#">Diễm Đàn</a></li>
                        <li><a href="#">Liên Hệ</a></li>
                    </ul>
                </div>
                <div id="content">
                    <div id="header">
                        <div id="logo">
                            <img src="/img/tplogo2014.png" alt="LocNM Bog" />
                        </div>
                        <div id="slogan">
                            Học CSS cơ bản
                        </div>
                    </div>

                    <div className="call-to-action">
                        <h3>Bạn sẽ học được những gì</h3>
                        <p>Seri nãy sẽ cung cấp các kiển thức cở bản về SCSS cơ bản </p>
                    </div>

                    <div className="row">
                        <div id="box1" className="col">
                            <h2>CSS </h2>
                            <img src="/img/css-icon.png" alt="LocNM Bog" />
                            <p>Seri nãy sẽ cung cấp các kiển thức cở bản về SCSS cơ bản
                                 Seri nãy sẽ cung cấp các kiển thức cở bản về SCSS cơ bản
                            Seri nãy sẽ cung cấp các kiển thức cở bản về SCSS cơ bản
                            Seri nãy sẽ cung cấp các kiển thức cở bản về SCSS cơ bản
                            </p>
                            <u>Tesst the u</u>
                            <u>Tesst the u</u>
                            <strike>Tesst the u</strike>
                            <strong>Strong</strong>
                        </div>
                        <div id="box2" className="col">
                            <h2>HTML </h2>
                            <img src="/img/html-icon.png" alt="LocNM Bog" />
                            <p>Seri nãy sẽ cung cấp các kiển thức cở bản về SCSS cơ bản </p>
                        </div>
                        <div id="box3" className="col">
                            <h2>GIAI TRI </h2>
                            <img src="/img/url-icon.png" alt="LocNM Bog" />
                            <p>Seri nãy sẽ cung cấp các kiển thức cở bản về SCSS cơ bản </p>
                        </div>
                    </div>

                    <div id="footer">
                        <p>Copyright &copy; Test CSS </p>
                        <table>
                            <tr>
                                <th></th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Layout;
