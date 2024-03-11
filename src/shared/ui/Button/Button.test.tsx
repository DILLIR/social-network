import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";
import { classNames } from "shared/lib/classNames/classNames";

describe('Button', () => {
    test('Test render', () => {
        render(<Button className={classNames("button")}>{'Test'}</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Test render with clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR} className={classNames("button")}>{'Test'}</Button>);
        expect(screen.getByText('Test')).toHaveClass("clear");
    });
});
