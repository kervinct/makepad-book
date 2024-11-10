use makepad_widgets::*;

live_design! {
    import makepad_widgets::base::*;
    import makepad_widgets::theme_desktop_dark::*;

    LOGO_MAKEPAD = dep("crate://self/resources/logo_makepad.png");

    App = {{App}} {
        ui: <Root> {
            main_window = <Window> {
                body = <View> {
                    flow: Down,
                    spacing: 20,
                    align: {
                        x: 0.5,
                        y: 0.5,
                    }

                    <Image> {
                        source: (LOGO_MAKEPAD),
                        width: 300,
                        height: 50,
                    }

                    <Label> {
                        text: "Hello Makepad!",
                        draw_text: {
                            color: #f,
                            text_style: {
                                font_size: 20.0,
                            }
                        },
                    }

                    <View> {
                        width: Fit,
                        height: Fit,
                        flow: Right,
                        spacing: 10,
                        align: {
                            y: 0.5,
                        }

                        minus = <Button> {
                            text: "-1",
                        }

                        counter = <Label> {
                            text: "0",
                            draw_text: {
                                color: #f
                            },
                        }

                        plus = <Button> {
                            text: "+1",
                        }
                    }
                }
            }
        }
    }
}

app_main!(App);

#[derive(Live, LiveHook)]
pub struct App {
    #[live] ui: WidgetRef,
}

impl LiveRegister for App {
    fn live_register(cx: &mut Cx) {
        crate::makepad_widgets::live_design(cx);
    }
}

impl MatchEvent for App {
    fn handle_actions(&mut self, cx: &mut Cx, actions:&Actions){
        // Get references to the UI elements, like js document.getElementById
        let minus_ref = self.ui.button(id!(minus));
        let counter_ref = self.ui.label(id!(counter));
        let plus_ref = self.ui.button(id!(plus));

        // Get the current value of the counter
        let counter_value = counter_ref.text().parse::<i32>().unwrap();

        // Handle the button clicks, like js event listeners
        if minus_ref.clicked(&actions) {
            counter_ref.set_text_and_redraw(cx, &format!("{}", counter_value - 1));
        }
        if plus_ref.clicked(&actions) {
            counter_ref.set_text_and_redraw(cx, &format!("{}", counter_value + 1));
        }
    }
}

impl AppMain for App {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event) {
        self.match_event(cx, event); // First, handle app's own events
        self.ui.handle_event(cx, event, &mut Scope::empty()); // Then, handle the UI's events
    }
}
