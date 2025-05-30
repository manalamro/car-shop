import React from "react";
import { render, fireEvent } from "@testing-library/react";
import New_item from "./new-item.component"; // Adjust if needed
import { CarsContext } from "../providers/carProvider";

const mockContextValue = {
  user: { role: "admin" },
};

describe("New_item Component", () => {
  test("calls handleSubmit when Add button is clicked", () => {
    const mockSubmit = jest.fn();

    const { getByRole } = render(
      <CarsContext.Provider value={mockContextValue}>
        <New_item handleSubmit={mockSubmit} />
      </CarsContext.Provider>
    );

    const form = document.querySelector("form");
    fireEvent.change(form.querySelector('input[name="car_color"]'), {
      target: { value: "Red" },
    });
    fireEvent.change(form.querySelector('input[name="PayPerMonth"]'), {
      target: { value: "300" },
    });
    fireEvent.change(form.querySelector('input[name="car_meter"]'), {
      target: { value: "20000" },
    });
    fireEvent.change(form.querySelector('input[name="car_year"]'), {
      target: { value: "2023" },
    });
    fireEvent.change(form.querySelector('input[name="car_Make"]'), {
      target: { value: "Toyota" },
    });
    fireEvent.change(form.querySelector('input[name="imgURL"]'), {
      target: { value: "img.jpg" },
    });

    fireEvent.change(form.querySelector('select[name="Car_status"]'), {
      target: { value: "For Sale" },
    });
    fireEvent.change(form.querySelector('select[name="cars_brand"]'), {
      target: { value: "Golf Cabriolet" },
    });
    fireEvent.change(form.querySelector('select[name="cars_transmission"]'), {
      target: { value: "Manual" },
    });
    fireEvent.change(form.querySelector('select[name="cars_EngineFuel"]'), {
      target: { value: "Diesel" },
    });
    fireEvent.change(form.querySelector('select[name="CarType"]'), {
      target: { value: "sedan" },
    });

    fireEvent.submit(form);

    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <CarsContext.Provider value={mockContextValue}>
        <New_item handleSubmit={() => {}} />
      </CarsContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
