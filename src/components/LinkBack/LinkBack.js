import { TiArrowBackOutline } from "react-icons/ti";
import { BackLink } from './LinkBack.styled';


export const LinkBack = ({ to = '/', children }) => {
    return (
        <BackLink to={to}>
            <TiArrowBackOutline />
            {children}
            </BackLink>
    );
};