import { Colors, Fonts, wp } from "@utils/Constants"
import { View, StyleSheet, Text } from "react-native"

const TermsAndPrivacy = () => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.footerWrapper}>
                <Text style={styles.policyText}>By continuing you are agree to our</Text>
                <Text style={styles.policyLink}>Terms of Service <Text style={styles.policyText}>&</Text> Privacy Policy</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    footerContainer: { flex: 1, justifyContent: 'flex-end' },
    footerWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: wp(5)
    },
    policyText: {
        color: '#fff',
        fontFamily: Fonts.Regular,
        fontSize: wp(3)
    },
    policyLink: {
        color: Colors.textLink,
        fontFamily: Fonts.SemiBold,
        fontSize: wp(3),
        lineHeight: 20
    }
});
export default TermsAndPrivacy