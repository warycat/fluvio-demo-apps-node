import * as React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import MyAvatar from './MyAvatar';
import Box from '@material-ui/core/Box';
import { ChatMessage } from '../models/Messages';
import { formatDate, dateRangeSec } from '../config/DateTime';

const GROUP_MESSAGE_WITHIN_SECONDS = 5;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chatBox: {
            fontFamily: "Whitney,Helvetica Neue,Helvetica,Arial,sans-serif",
        },
        section: {
            marginTop: 5,
        },
        sectionSameUser: {
            marginTop: 0,
        },
        avatarHeader: {
            paddingTop: 3,
        },
        name: {
            fontWeight: 'bold',
            fontSize: '1.1em'
        },
        date: {
            paddingLeft: 7,
            fontWeight: 'normal',
            fontSize: '.9em',
            color: "#666",
        },
        text: {
            fontSize: '1.1em',
        },
        lineGaps: {
            marginLeft: 50,
        }
    }),
);

interface Props {
    prevMessage?: ChatMessage,
    message: ChatMessage,
    colorCode: string,
}

export default function MyChatMessage(props: Props) {
    const classes = useStyles();
    const { prevMessage, message, colorCode } = props;
    const date = formatDate(message.timestamp);

    const sameUser = () => {
        return (
            prevMessage &&
            prevMessage.user == message.user &&
            dateRangeSec(prevMessage.timestamp, message.timestamp) < GROUP_MESSAGE_WITHIN_SECONDS
        );
    }

    return (
        <div className={classes.chatBox}>
            {!sameUser() &&
                <Box display="flex" flexDirection="row" className={classes.section}>
                    <MyAvatar name={message.user} colorCode={colorCode} />
                    <Box display="flex" flexDirection="column">
                        <div className={classes.avatarHeader} >
                            <span className={classes.name}>{message.user}</span>
                            <span className={classes.date}>{date}</span>
                        </div>
                        <div className={classes.text}>
                            {message.message}
                        </div>
                    </Box>
                </Box >
            }
            {sameUser() &&
                <Box display="flex" flexDirection="row" className={classes.sectionSameUser}>
                    <div className={classes.lineGaps}>
                        <div className={classes.text}>
                            {message.message}
                        </div>
                    </div>
                </Box >
            }
        </div>
    );
}
