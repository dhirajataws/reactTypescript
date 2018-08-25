import * as  React from 'react';

export interface Props {
    name: String;
    elevel?: number;
}

function Hello({ name, elevel = 1 }: Props) {
    if (elevel <= 0) {
        throw new Error('you could be more enthu');
    }
    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(elevel)}</div></div>
    )
}
export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!')
}