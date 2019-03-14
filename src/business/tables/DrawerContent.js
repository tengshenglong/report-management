import React, { Component } from "react";
import DescriptionList from 'ant-design-pro/lib/DescriptionList';

const { Description } = DescriptionList;

class DrawerContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <DescriptionList size="large" title="title" layout="vertical">
                <Description term="Firefox">
                    A free, open source, cross-platform,
                    graphical web browser developed by the
                    Mozilla Corporation and hundreds of
                    volunteers.
                </Description>
                <Description term="Firefox">
                    A free, open source, cross-platform,
                    graphical web browser developed by the
                    Mozilla Corporation and hundreds of
                    volunteers.
                </Description>
                <Description term="Firefox">
                    A free, open source, cross-platform,
                    graphical web browser developed by the
                    Mozilla Corporation and hundreds of
                    volunteers.
                </Description>
            </DescriptionList>
        );
    }
}

export default DrawerContent;
