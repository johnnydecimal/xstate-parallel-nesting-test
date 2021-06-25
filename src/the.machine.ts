import { createMachine } from "xstate";

export const theMachine = createMachine({
  id: "theMachine",
  initial: "first",
  states: {
    first: {
      type: "parallel",
      states: {
        alpha: {
          type: "parallel",
          states: {
            second_one: {
              type: "compound",
              initial: "start",
              states: {
                start: {
                  on: {
                    finish_one_alpha: "finish"
                  }
                },
                finish: {
                  type: "final"
                }
              }
            },
            second_two: {
              type: "compound",
              initial: "start",
              states: {
                start: {
                  on: {
                    finish_two_alpha: "finish"
                  }
                },
                finish: {
                  type: "final"
                }
              }
            },
            second_three: {
              type: "compound",
              initial: "start",
              states: {
                start: {
                  on: {
                    finish_three_alpha: "finish"
                  }
                },
                finish: {
                  type: "final"
                }
              }
            },
            second_four: {
              type: "compound",
              initial: "start",
              states: {
                start: {
                  on: {
                    finish_four_alpha: "finish"
                  }
                },
                finish: {
                  type: "final"
                }
              }
            }
          }
        },
        beta: {
          type: "parallel",
          states: {
            second_one: {
              type: "compound",
              initial: "start",
              states: {
                start: {
                  on: {
                    finish_one_beta: "finish"
                  }
                },
                finish: {
                  type: "final"
                }
              }
            },
            second_two: {
              type: "compound",
              initial: "start",
              states: {
                start: {
                  on: {
                    finish_two_beta: "finish"
                  }
                },
                finish: {
                  type: "final"
                }
              }
            },
            second_three: {
              type: "compound",
              initial: "start",
              states: {
                start: {
                  on: {
                    finish_three_beta: "finish"
                  }
                },
                finish: {
                  type: "final"
                }
              }
            },
            second_four: {
              type: "compound",
              initial: "start",
              states: {
                start: {
                  on: {
                    finish_four_beta: "finish"
                  }
                },
                finish: {
                  type: "final"
                }
              }
            }
          }
        }
      },
      onDone: "#theMachine.final"
    },
    final: {
      type: "final"
    }
  }
});
