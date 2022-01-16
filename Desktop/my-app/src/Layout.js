import Background from '../../../images/view.jpg'

const Layout = {
    landing: {
        fontFamily: 'Monoton , cursive',
        backgroundImage: `url(${Background})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    btn1: {
        marginTop: '1rem',
        width: '200px',
        height: '50px',
        borderRadius: '10px',
        backgroundColor: 'transparent',
        border: 'solid #333',
        color: '#fff',
        fontSize: '20px',
        fontWeight: 'bold',
        filter: 'blur(0px)'
    },
    logbox: {
        paddingTop: '2rem',
        paddingLeft: '5rem',
        marginBottom:'0',
        paddingBottom: '1rem',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        fontSize: '18px'
    }
}

export default Layout