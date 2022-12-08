import Image from "next/image";
import { useState } from "react";
import BackImg from '../assets/images/image.png';
import { VolumeUpRounded, VolumeOffRounded, PlayArrowRounded, PauseRounded } from '@mui/icons-material';

const Header = () => {

    const [volume, setVolume] = useState(true);
    const [play, setPlay] = useState(true);

    return (
        <div className="Header parent">
            <Image src={BackImg} priority alt="img" className="back-img" width={1000} height={500} />
            <div className="side-buttons">
                <div className="volume" onClick={() => setVolume(!volume)}>
                    {volume ?
                        <VolumeUpRounded className="icon" /> :
                        <VolumeOffRounded className="icon" />
                    }
                </div>
                <div className="play" onClick={() => setPlay(!play)}>
                    {play ?
                        <PauseRounded className="icon" /> :
                        <PlayArrowRounded className="icon" />
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;