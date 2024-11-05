"use client";
import React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { HeaderText, ImageBox, DetailsBox } from "./HelpPageTemplate.styles";
import { List, ListItem, ListItemText } from "@mui/material";

const HelpPageTemplate = (props) => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "black",
        padding: "20px",
        width: "80%",
        margin: "0 auto",
        minHeight: "calc(100vh - 64px - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 3, color: "white" }}>
        <Typography variant="h3" gutterBottom sx={{ color: "black" }}>
          Help & FAQs
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ color: "black" }}>
          General Use
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HeaderText>How do I become a member?</HeaderText>
          </AccordionSummary>
          <AccordionDetails>
            <DetailsBox>
              <Typography>
                To apply to become a new member, click the &quot;New
                Member?&quot; button on the top right of the website in order to
                be taken to the member application form. Submit the form which
                will be reviewed by organization leaders.
              </Typography>
              <ImageBox>
                <img src="/new_member.gif" alt="New member guide" />
              </ImageBox>
            </DetailsBox>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HeaderText>How do I sign into my account?</HeaderText>
          </AccordionSummary>
          <AccordionDetails>
            <DetailsBox>
              <Typography>
                To sign into your account, just press sign in on the top right
                of the website and you will be redirected to a Google sign-in.
                Use the email that you entered in your application to access
                your profile and actions.
              </Typography>
              <ImageBox>
                <img src="/signin.gif" alt="Sign in guide" />
              </ImageBox>
            </DetailsBox>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HeaderText>How do I access and edit my profile?</HeaderText>
          </AccordionSummary>
          <AccordionDetails>
            <DetailsBox>
              <Typography>
                You can access the profile through the drop down on the
                top-right of the screen after signing in.
              </Typography>
              <ImageBox>
                <img src="/profile.gif" alt="Profile guide" />
              </ImageBox>
            </DetailsBox>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HeaderText>How do I edit my information?</HeaderText>
          </AccordionSummary>
          <AccordionDetails>
            <DetailsBox>
              <Typography>
                You can edit your information through the edit form located in
                the profile.
              </Typography>
              <ImageBox>
                <img src="/profile.gif" alt="Profile guide" />
              </ImageBox>
            </DetailsBox>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HeaderText>
              I lost my account credentials or used a email that isn&apos;t
              compatible with Google sign in.
            </HeaderText>
          </AccordionSummary>
          <AccordionDetails>
            <DetailsBox>
              <Typography>
                Ask an officer to delete your account so you can reapply.
              </Typography>
            </DetailsBox>
          </AccordionDetails>
        </Accordion>
        <br></br>
        <Typography variant="h4" gutterBottom sx={{ color: "black" }}>
          Officers
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HeaderText>
              What are the specific actions and views available to each officer?
            </HeaderText>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText primary="Project Leads:" />
              </ListItem>
              <List disablePadding>
                <ListItem>
                  <ListItemText primary="• Create and edit new projects" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Manage project membership" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Manage project milestones" />
                </ListItem>
              </List>
              <ListItem>
                <ListItemText primary="Treasurer:" />
              </ListItem>
              <List disablePadding>
                <ListItem>
                  <ListItemText primary="• View active members" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Update and manage dues" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Create mailing list of members with unpaid dues" />
                </ListItem>
              </List>
              <ListItem>
                <ListItemText primary="Internal Relations:" />
              </ListItem>
              <List disablePadding>
                <ListItem>
                  <ListItemText primary="• View active, archived members" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Review and approve applicants" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Archive and restore members" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Edit member information" />
                </ListItem>
              </List>
              <ListItem>
                <ListItemText primary="Vice President:" />
              </ListItem>
              <List disablePadding>
                <ListItem>
                  <ListItemText primary="• View active, archived members" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Review and approve applicants" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Update roles" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Add and remove accomplishments" />
                </ListItem>
              </List>
              <ListItem>
                <ListItemText primary="President:" />
              </ListItem>
              <List disablePadding>
                <ListItem>
                  <ListItemText primary="• All actions of other roles" />
                </ListItem>
              </List>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HeaderText>
              I am unable to use my permissions as an officer even though I am
              signed in.
            </HeaderText>
          </AccordionSummary>
          <AccordionDetails>
            <DetailsBox>
              <Typography>
                First refresh the page after signing in. If this still does not
                allow you to access the dashboards or actions permitted to your
                role, ask someone with access to an admin account (usually the
                president) if they can check your role and ensure it is properly
                set.
              </Typography>
            </DetailsBox>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HeaderText>How do I update someone&rsquo;s role?</HeaderText>
          </AccordionSummary>
          <AccordionDetails>
            <DetailsBox>
              <Typography>
                In the member dashboard, if you have the permissions, you should
                be able to update member roles from the dropdown menu at the end
                of each member row.
              </Typography>
              <ImageBox>
                <img src="/update_role.gif" alt="Update role guide" />
              </ImageBox>
            </DetailsBox>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HeaderText>
              As an officer, how do I access the dashboards to manage
              organizational members and projects?
            </HeaderText>
          </AccordionSummary>
          <AccordionDetails>
            <DetailsBox>
              <Typography>
                After clicking on the profile icon on the right of the
                navigation bar, the &quot;Members&quot; option will lead to the
                members dashboard while the &quot;Projects&quot; option will
                lead to the projects dashboard.
              </Typography>
              <ImageBox>
                <img src="/dashboards.gif" alt="Dashboard guide" />
              </ImageBox>
            </DetailsBox>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HeaderText>How do I adjust the dues of members?</HeaderText>
          </AccordionSummary>
          <AccordionDetails>
            <DetailsBox>
              <Typography>
                In the member dashboard, click on the &quot;Manage Dues&quot;
                button and then &quot;Update Dues&quot;. Now you can update the
                due status of active members.
              </Typography>
              <ImageBox>
                <img src="/dues.gif" alt="Update dues guide" />
              </ImageBox>
            </DetailsBox>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HeaderText>How do I view and manage applications?</HeaderText>
          </AccordionSummary>
          <AccordionDetails>
            <DetailsBox>
              <Typography>
                In the member dashboard, if you have the permissions, you should
                be able to see a toggle to view applications which will display
                the current member applications. From this display, you can
                accept or deny applications.
              </Typography>
              <ImageBox>
                <img src="/applications.gif" alt="Applications guide" />
              </ImageBox>
            </DetailsBox>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HeaderText>
              How do I archive, view archived members, and restore archived
              members?
            </HeaderText>
          </AccordionSummary>
          <AccordionDetails>
            <DetailsBox>
              <Typography>
                In the member dashboard, if you have the permissions, you should
                be able to archive a member in a drop down menu, toggle to view
                archived members, and restore archived members.
              </Typography>
              <ImageBox>
                <img src="/archives.gif" alt="Archives guide" />
              </ImageBox>
            </DetailsBox>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HeaderText>
              How do I filter and manage the information displayed for members?
            </HeaderText>
          </AccordionSummary>
          <AccordionDetails>
            <DetailsBox>
              <Typography>
                In the member dashboard, you can adjust the columns that are
                displayed and filter for members with specific details.
              </Typography>
              <ImageBox>
                <img src="/members.gif" alt="Member filter guide" />
              </ImageBox>
            </DetailsBox>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HeaderText>How do I create, edit, and delete projects?</HeaderText>
          </AccordionSummary>
          <AccordionDetails>
            <DetailsBox>
              <Typography>
                In the project dashboard, click to add a new project in the top
                right corner. Enter in the project details and clikc save. From
                there, you can view the information associated with the project,
                you can then edit, and delete from that page, or view how it
                looks displayed on the homepage.
              </Typography>
              <ImageBox>
                <img src="/project.gif" alt="Member filter guide" />
              </ImageBox>
            </DetailsBox>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default HelpPageTemplate;
