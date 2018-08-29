import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;

  margin-top: 30px;
  padding: 15px;

  background-color: #242424;
  color: #808080;
  text-align: center;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(100%);

  &.docked {
    transform: translate(0);
  }
`;

const FooterLink = styled.a`
  color: #fff;
`;

class Footer extends Component {
  constructor() {
    super();

    this.state = {
      isFooterDocked: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.checkShouldHideFooter = this.checkShouldHideFooter.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.unlisten = this.props.history.listen(() => {
      // delay so the page has time to reflow
      setTimeout(this.checkShouldHideFooter, 20);
    });
    window.onload = this.checkShouldHideFooter;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    this.unlisten();
  }

  handleScroll() {
    this.checkShouldHideFooter();
  }

  checkShouldHideFooter() {
    const scrollBottom =
      document.documentElement.scrollHeight -
      window.innerHeight -
      window.pageYOffset;
    if (scrollBottom > 15 && this.state.isFooterDocked) {
      this.hideFooter();
    } else if (scrollBottom <= 15 && !this.state.isFooterDocked) {
      this.showFooter();
    }
  }

  hideFooter() {
    this.setState({
      isFooterDocked: false,
    });
  }

  showFooter() {
    this.setState({
      isFooterDocked: true,
    });
  }

  render() {
    return (
      <StyledFooter className={this.state.isFooterDocked ? 'docked' : ''}>
        © 2018{' '}
        <FooterLink
          href="https://josnun.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josiah Nunemaker
        </FooterLink>
      </StyledFooter>
    );
  }
}

export default withRouter(Footer);
