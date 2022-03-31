import react from 'React'

export default FirstAidInformationUsers = (props) => {
    return(
        <View
            style={styles.card.background}
        >
            <Text
                style={styles.card.title}
            >
                {props.cuts.title}
            </Text>
            <Text
                style={styles.card.description}
            >
                {props.cuts.description}
            </Text>
        </View>
    )
}

const styles = Stylesheet.create({
    card: {
        title: {
            fontSize: '20px',
            color: 'black',
            fontWeight: 'bold'
        },
        background: {
            width: '50vw',
            height: '20vh',
            borderTopRightRadius: '10px',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            backgroundColor: 'yellow',
            boxShadow: '10px'
        },
        description: {
            fontSize: '10px',
            color: 'black',
        }
    }
})