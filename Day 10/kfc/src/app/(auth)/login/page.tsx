import React from "react";

type Props = {};

export default function LoginPage({}: Props) {
  return <div>page</div>;
}

<div className="">
  <section className="container login-content">
    <div className="page-block">
      <div className="block-right order-md-2 appear-right">
        <div className="login-section form-area">
          <div style="margin-bottom: 1rem">
            <h1>Masuk</h1>
            <span>(Pengguna dapat masuk dengan kredensial aplikasi KFCKU)</span>
          </div>

          <form novalidate="" className="ng-untouched ng-pristine ng-invalid">
            <div className="form-group">
              <mat-form-field className="mat-form-field -c90-2 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid">
                <div className="mat-form-field-wrapper -c90-2">
                  <div className="mat-form-field-flex -c90-2">
                    <div className="mat-form-field-infix -c90-2">
                      <input
                        matinput=""
                        placeholder=""
                        required=""
                        autocomplete="off"
                        type="text"
                        formcontrolname="phoneNumber"
                        minlength="8"
                        maxlength="13"
                        id="phoneNumber"
                        className="mat-input-element mat-form-field-autofill-control -c90-2 cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-invalid"
                        aria-invalid="false"
                        aria-required="true"
                      />
                      <span className="mat-form-field-label-wrapper -c90-2">
                        <label
                          className="mat-form-field-label -c90-2 mat-empty mat-form-field-empty"
                          id="mat-form-field-label-1"
                          for="phoneNumber"
                          aria-owns="phoneNumber"
                        >
                          <mat-label className="-c90-2">
                            Nomor handphone{" "}
                          </mat-label>
                          <span
                            aria-hidden="true"
                            className="mat-placeholder-required mat-form-field-required-marker -c90-2"
                          >
                            *
                          </span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="mat-form-field-underline -c90-2">
                    <span className="mat-form-field-ripple -c90-2"></span>
                  </div>

                  <div className="mat-form-field-subscript-wrapper -c90-2">
                    <div
                      className="mat-form-field-hint-wrapper -c90-2"
                      style="opacity: 1; transform: translateY(0%)"
                    >
                      <div className="mat-form-field-hint-spacer -c90-2"></div>
                    </div>
                  </div>
                </div>
              </mat-form-field>
            </div>
            <div className="form-group input-with-icon">
              < className="mat-form-field mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-invalid">
                <div className="mat-form-field-wrapper -c90-3">
                  <div className="mat-form-field-flex -c90-3">
                    <div className="mat-form-field-infix -c90-3">
                      <input
                        matinput=""
                        formcontrolname="password"
                        id="password"
                        required=""
                        className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-invalid"
                        type="password"
                        aria-invalid="false"
                        aria-required="true"
                      />
                      <span className="mat-form-field-label-wrapper -c90-3">
                        <label
                          className="mat-form-field-label mat-empty mat-form-field-empty"
                          id="mat-form-field-label-3"
                          for="password"
                          aria-owns="password"
                        >
                          <mat-label className="">Kata sandi</mat-label>
                          <span
                            aria-hidden="true"
                            className="mat-placeholder-required mat-form-field-required-marker"
                          >
                            *
                          </span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="mat-form-field-underline">
                    <span className="mat-form-field-ripple -c90-3"></span>
                  </div>

                  <div className="mat-form-field-subscript-wrapper -c90-3">
                    <div
                      className="mat-form-field-hint-wrapper"
                      style="opacity: 1; transform: translateY(0%)"
                    >
                      <div className="mat-form-field-hint-spacer -c90-3"></div>
                    </div>
                  </div>
                </div>
              </mat-form-field>
              <a href="javascript:void(0);">
                <i className="icon-password"></i>
              </a>
            </div>
            <div className="forget-password-link">
              <a>Lupa Kata Sandi?</a>
            </div>
            <div className="sticky-button">
              <div>
                <button
                  mat-raised-button=""
                  className="mat-focus-indicator mat-raised-button mat-button-base btn btn-block btn-green"
                  type="submit"
                >
                  <span className="mat-button-wrapper">
                    <span className="button-content">Masuk</span>
                  </span>
                  <div className="mat-ripple mat-button-ripple"></div>
                  <div className="mat-button-focus-overlay"></div>
                </button>
              </div>
            </div>
          </form>
          <div className="social-section mt-4">
            <h5>
              <span> ATAU MASUK DENGAN: </span>
            </h5>
            <div>
              <div>
                <div>
                  <button
                    mat-flat-button=""
                    className="mat-focus-indicator mat-flat-button mat-button-base btn btn-black btn-block top btn-fb-apl"
                    type="submit"
                  >
                    <span className="mat-button-wrapper">
                      <span className="button-content">
                        <img
                          title="Apple"
                          src="data:image/png;base64,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"
                          style="width: 30px; margin-right: 0.2rem"
                        />
                        Masuk dengan Apple
                      </span>
                    </span>
                    <div className="mat-ripple mat-button-ripple"></div>
                    <div className="mat-button-focus-overlay"></div>
                  </button>
                </div>
                <div>
                  <button
                    mat-flat-button=""
                    className="mat-focus-indicator mat-flat-button mat-button-base btn btn-red btn-block btn-fb-apl"
                    type="submit"
                  >
                    <span className="mat-button-wrapper">
                      <span className="button-content">
                        <i className="icon-apple googleico"></i>Masuk dengan
                        Google
                      </span>
                    </span>
                    <div className="mat-ripple mat-button-ripple"></div>
                    <div className="mat-button-focus-overlay"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-4">
            <span> Belum punya akun? </span>
            <a className="mat-ripple text-bold link-underline mat-ripple-unbounded">
              Daftar
            </a>
          </p>
        </div>
      </div>
      <div className="block-left order-md-1 appear-left loader-bg remove-loader">
        <div>
          <picture className="">
            <source
              media="(min-width: 768px)"
              srcset="
                https://static.order.kfcku.com/images/web/signin/lg/signin.jpg?v=3QqDy3
              "
            />
            <source
              media="(max-width: 767px)"
              srcset="
                https://static.order.kfcku.com/images/web/signin/xs/signin.jpg?v=3QqDy3
              "
            />
            <img
              loading="lazy"
              className="img-fluid"
              src="https://static.order.kfcku.com/images/web/signin/lg/signin.jpg?v=3QqDy3"
              alt="signin"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</div>;
