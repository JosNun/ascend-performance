import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Card from '../Cards/Card';
import CardSlider from '../Cards/CardSlider';
import TextView from '../common/TextView';
import TextInput from '../common/TextInput';

import graphImg from '../assets/images/icons/graph.svg';
import clockImg from '../assets/images/icons/clock.svg';
import infiniteImg from '../assets/images/icons/infinite.svg';

const BodyHeader = styled.h1`
  color: #242424;
  text-align: center;
`;

export default ({ history }) => (
  <React.Fragment>
    <Header />
    <CardSlider>
      <Card headImage={clockImg}>
        By using state of the art technology and AI, Ascend personalizes your
        workouts to maximize gain and save you time.
      </Card>
      <Card headImage={graphImg}>
        Ascend Performance uses the latest in performance tracking technology,
        enabling you to track your workouts, and synchronize them effortlessly
        across all of your devices.
      </Card>
      <Card headImage={infiniteImg}>
        Workout sharing enables a bit of friendly competition, which has been
        proven to boost motivation and workout efficiency.
      </Card>
    </CardSlider>
    <TextView>
      By combining the sensors that are already in your smartphone with state of
      the art AI and machine learning, Ascend takes fitness tracking to the next
      level. Sign up below to be one of the first to be able to make use of this
      new technology, and help test and train the future of personal fitness.
    </TextView>

    <BodyHeader>Join the Revolution</BodyHeader>
    <form
      onSubmit={e => {
        e.preventDefault();

        const form = e.target;
        const url = form.action;

        const formInputs = Array.from(form.elements);

        const payload = formInputs.reduce((acc, el) => {
          const val = encodeURIComponent(el.value);
          const name = el.name;

          if (!name || !val) {
            return acc;
          }

          return (acc += `${name}=${val}&`);
        }, '');

        fetch(url, {
          method: 'POST',
          body: payload,
        });

        history.push('/about');
      }}
      netlify="true"
    >
      <TextInput name="email" placeholder="Enter your email..." />
    </form>
  </React.Fragment>
);
