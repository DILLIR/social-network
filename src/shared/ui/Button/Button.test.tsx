import { Button } from "./Button";
import React from "react";
import { render, screen } from "@testing-library/react";
import { classNames } from '../../lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {

        render(<Button className={classNames("button")}>{'Test'}</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
