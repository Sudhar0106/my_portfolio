import React from "react";
import { BsArrowRight } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { CiUser } from 'react-icons/ci';
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from 'react-toastify';


export const ContactMe = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    useEffect(() => {

        var field = document.getElementById('fieldOne');
        var field1 = document.getElementById('fieldTwo');

        field.addEventListener('keypress', function (event) {
            var key = event.keyCode;
            if (key === 32) {
                event.preventDefault();
            }
        });
        field1.addEventListener('keypress', function (event) {
            var key = event.keyCode;
            if (key === 32) {
                event.preventDefault();
            }
        });
    }, [])

    const onSubmit = () => {
        reset();
        toast.success("Thank u for your support.")
    }

    return (
        <div className="cntctme">
            <form className="col-md-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                    <label className="form-label">Name</label>
                    <div className="input-group">
                        <span className="input-group-text"><CiUser /></span>
                        <input type="text" className="form-control" id="fieldOne"
                            placeholder="Enter your name" name="name"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "* Name is required."
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9_.-]*$/,
                                    message: "* Special characters not allowed."
                                }
                            })}
                        />
                    </div>
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>
                <div className="mb-2">
                    <label className="form-label">E-mail</label>
                    <div className="input-group">
                        <span className="input-group-text"><HiOutlineMail /></span>
                        <input type="text" className="form-control" id="fieldTwo"
                            placeholder="Enter your E-mail" name="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "* E-mail is required."
                                },
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "* In-valid E-mail address."
                                }
                            })}
                        />
                    </div>
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>
                <div className="mb-2">
                    <label className="form-label">Message</label>
                    <textarea type="text" className="form-control"
                        placeholder="Write your message" name="message"
                        {...register("message", {
                            required: {
                                value: true,
                                message: "* Message is required."
                            }
                        })}
                    />
                    {errors.message && <p className="error">{errors.message.message}</p>}
                </div>

                <div className="text-center my-4">
                    <button className="secondaryBtn" type="submit">Submit <BsArrowRight /></button>
                </div>
            </form>
        </div>
    )
}