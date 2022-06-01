

import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { Menu } from '@mui/icons-material';

const StyledApp = styled(AppBar)`
        background: #fff;
        height: 70px;
`;
    
const MenuIcon = styled(Menu)`
        color: #000;
`;
    
const Image = styled('img')({
        height: 55,
        margin: 'auto',
        paddingRight: 70
})

const Header = () => {
    //news image url
    const url = 'https://www.izawa-seikostuin.com/upload/tenant_1/process/416bd7bf93fd5d95fa15e37813aca8ae.jpg';

    return (
        <StyledApp>
            <Toolbar>
                <MenuIcon />
                <Image src={url} alt="logo" />
            </Toolbar>
        </StyledApp>
    )
}

export default Header;