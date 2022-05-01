import React from "react";
import { Link } from "react-router-dom";
import { Footer, Img } from "./footer.style";
export default function FooterContainer() {

    return (
        <Footer>
            Built for L1 tokens fans by Fantasic Team <Img src="img/footerimg.png" />{new Date().getFullYear()}
        </Footer>
    )
}
