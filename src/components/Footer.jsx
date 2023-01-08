export default function Footer() {

    const date = new Date().getFullYear();

    return (
        <div id="footer_div">
            <div id="div_para">
                <p id="footer_para">All Rights Reserved {date}</p>
                <p></p>
            </div>
        </div>
    )
}