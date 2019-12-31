import React, { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useInView } from "react-intersection-observer"
import Unity, { UnityContent } from "react-unity-webgl"
import Observer from "@researchgate/react-intersection-observer"
import "../styles/index-new.scss"
import { render } from "react-dom"
import { Link } from "gatsby"
import Layout from "../components/layout-2"

/* For the cards */
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
})

const InterviewCard = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          image="https://images.unsplash.com/photo-1497015289639-54688650d173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="Interview1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Interview
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This was me and Dr...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

const ADHDCard = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          image="https://images.unsplash.com/photo-1533237744709-87cb88bf481b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="ADHD"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            What is ADHD?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Development and brain activity that affect attention...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

const ADHDCard2 = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="ADHD"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            How does ADHD effect me?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Brain activity that affects attention...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

const BiCard = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          image="https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="Bi-Polar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            How to treat Bipolar?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

const BiCard2 = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          image="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Am I Bipolar?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

class WindowFrame extends React.Component {
  state = {
    visibility: "hidden",
  }
  unityContent = new UnityContent(
    "/Brain2/Build/Brain2.json",
    "/Brain2/Build/UnityLoader.js"
  )
  handleChange = event => {
    this.setState({
      visibility: event.isIntersecting ? "visible" : "invisible",
    })
  }
  triggerHomeAnim = event => {
    return event.isIntersecting
      ? this.unityContent.send(
          "GameController",
          "TriggerAnimFunc",
          "inHome true"
        )
      : this.unityContent.send(
          "GameController",
          "TriggerAnimFunc",
          "inHome false"
        )
  }
  triggerAdhdAnim = event => {
    return event.isIntersecting
      ? this.unityContent.send(
          "GameController",
          "TriggerAnimFunc",
          "inADHD true"
        )
      : this.unityContent.send(
          "GameController",
          "TriggerAnimFunc",
          "inADHD false"
        )
  }

  triggerBiAnim = event => {
    return event.isIntersecting
      ? this.unityContent.send("GameController", "TriggerAnimFunc", "inBi true")
      : this.unityContent.send(
          "GameController",
          "TriggerAnimFunc",
          "inBi false"
        )
  }

  render() {
    return (
      <>
        <Layout>
          <div>
            <Unity unityContent={this.unityContent} />
          </div>
          <div className="app">
            <div className="header">
              <div className="header__left">
                <span>J.D</span>
              </div>
              <div className="header__right">
                <p>Thu, 14 Jun | 16:20</p>
              </div>
            </div>
            <div className="main">
              <Observer onChange={this.triggerHomeAnim}>
                <div className="sectionTwo" id="Home" data-section>
                  <div className="sectionTwo__header">
                    <div className="sectionTwo__controls">
                      {/*  <div className="user">
                            <img src="https://portfolio-videos-2019.s3-us-west-2.amazonaws.com/10157343414530667.jpg" className="user__img" alt="" />
                            <span className="user__name">Jamal Dahbur</span>
                        </div> */}
                    </div>
                    <h1 className="sectionOne__title">Home</h1>
                    <p className="sectionOne__subtitle">Home Sub</p>
                  </div>
                  <div className="sectionTwo__content">
                    <ul className="box-grid">
                      <InterviewCard />
                    </ul>
                  </div>
                </div>
              </Observer>
              <Observer onChange={this.triggerAdhdAnim}>
                <div className="sectionOne" id="adhd" data-section>
                  <header className="sectionOne__header">
                    <h1 className="sectionOne__title">ADHD</h1>
                    <p className="sectionOne__subtitle">ADHD Sub</p>
                  </header>
                  <div className="sectionOne__content">
                    <ul className="boxgrid">
                      <ADHDCard />
                      <ADHDCard2 />
                    </ul>
                  </div>
                </div>
              </Observer>
              <Observer onChange={this.triggerBiAnim}>
                <div className="sectionFour" id="bipolar" data-section>
                  <header className="sectionFour__header">
                    <h1 className="sectionFour__title">Bi-Polar</h1>
                    <p className="sectionFour__subtitle">Bi-Polar Sub</p>
                  </header>
                  <div className="sectionFour__content">
                    <ul className="boxgrid">
                      <BiCard />
                      <BiCard2 />
                    </ul>
                  </div>
                </div>
              </Observer>
              {/*     <Observer onChange={this.triggerAdhdAnim}>
                    <div className="sectionThree" id="paidProjects" data-section>
                        <div className="sectionThree__header">
                            <h1 className="sectionThree__title">Professional Work</h1>
                            <p className="sectionThree__subtitle">UNDER CONSTRUCTION</p>
                        </div>
                        <div className="sectionThree__content">
                        </div>
                        </div>
                  </Observer>*/}
            </div>
            <footer className="footer">
              <p>
                Twiiter <a href="https://twitter.com/dahburj">@dahburj</a>
              </p>
            </footer>
          </div>
        </Layout>
      </>
    )
  }
}

const UnityComponent: React.FC = () => {
  const unityRef = useRef()

  const unityContent = new UnityContent(
    "/face-rect/Build/face-rect.json",
    "/face-rect/Build/UnityLoader.js"
  )

  return (
    <div ref={unityRef.current}>
      <Unity unityContent={unityContent} />
    </div>
  )
}

export default WindowFrame
