import classes from './TopBar.module.css'

const TopBar = () =>{
    return(
        <header>
            <nav className={classes.TopBar}>
                <img src="/amazon.png" alt="Amazon Logo"/>
            </nav>
        </header>
    );
}

export default TopBar;