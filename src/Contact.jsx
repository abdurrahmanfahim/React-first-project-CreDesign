

const Contact = () => {
  return (
    <section id="contact">
        <div className="container">
            <small className="ser">
                <div className="circle-1">
                    <div className="circle-2"></div>
                </div>
                <span className="sm-heading">My Contact</span>
            </small>
            <div className="headings">
                <h2>
                    I WANT TO HEAR FROM YOU
                </h2>
            </div>
            <div className="wrap">
                <form action="">
                    <input type="text" placeholder="Your name" />
                    <input type="text" placeholder="Your email" />
                    <input type="text" placeholder="Your phone" />
                    <input type="text" placeholder="Subject" />
                    <textarea name="" id="" placeholder="Your masage"></textarea>
                <a className="cvBtn" href="#">Send Me Message</a>
                </form>
                <div className="contacts">
                    <ul>
                        <li>
                            <img src="/public/images/Icon32.svg" alt="icon" />
                        </li>
                        <li>
                            <span className="addr">Address</span>
                            <span>202 Dog Hill Lane Beloit, KS 67420</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src="/public/images/Group 106.svg" alt="icon" />
                        </li>
                        <li>
                            <span className="addr">Phone</span>
                            <span>+8801613529163</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src="/public/images/Group4.svg" alt="icon" />
                        </li>
                        <li>
                            <span className="addr">Email</span>
                            <span>md.abdur.rahman.fahim@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact