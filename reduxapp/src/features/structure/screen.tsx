import * as React from 'react';
import './screen.css';

interface Screenprops {
    children?: React.ReactNode;
}
export const Screen = (props: Screenprops) => (
    <div className="screen--container">
        <main className="row">
            <div className="col-xs-12 col-lg-6 ">
                <div>hello this is screen</div>
            </div>
        </main>
    </div>
)