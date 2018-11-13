export const colorStyles = [
  {
    "backgroundColor": "#465A64",
    "textColor": "#FAFAFA"
  },
  {
    "backgroundColor": "#FAFAFA",
    "textColor": "#880C4B"
  },
  {
    "backgroundColor": "#FAFAFA",
    "textColor": "#20547D"
  },
  {
    "backgroundColor": "#D0414F",
    "textColor": "#FAFAFA"
  },
  {
    "backgroundColor": "#FAFAFA",
    "textColor": "#663399"
  },
  {
    "backgroundColor": "#20547D",
    "textColor": "#FAFAFA"
  },
  {
    "backgroundColor": "#FAFAFA",
    "textColor": "#D0414F"
  },
  {
    "backgroundColor": "#880C4B",
    "textColor": "#FAFAFA"
  },
  {
    "backgroundColor": "#FAFAFA",
    "textColor": "#0897F8"
  },
  {
    "backgroundColor": "#FAFAFA",
    "textColor": "#61AD87"
  }
];


export const particleStyles = [
  {
    "particles": {
      "number": {
          "value": 60,
          "density": {
              "enable": true,
              "value_area": 1500
          }
      },
      "line_linked": {
          "enable": true,
          "opacity": 0.04,
          "color": "#FAFAFA"
      },
      "move": {
          "direction": "none",
          "speed": 1.25
      },
      "size": {
          "value": 1.25
      },
      "opacity": {
          "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.05
          }
      },
      "color": {
        "value": "#FAFAFA"
      }
    },
    "retina_detect": true
  },
  {
    "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        },
        "line_linked": {
          "color": "#FAFAFA"
        },
        "color": {
          "value": "#FAFAFA"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
  },
  {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        },
        "color": {
          "value": "#FAFAFA"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
  },
  {
    "particles": {
      "number": {
          "value": 40,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 10,
          "random": true
      },
      "move": {
          "direction": "bottom",
          "out_mode": "out"
      },
      "line_linked": {
          "enable": false
      },
      "color": {
        "value": "#FAFAFA"
      }
    }
  }
];