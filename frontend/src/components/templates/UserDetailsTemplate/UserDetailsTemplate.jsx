"use client";

import React, { useEffect, useState } from "react";
import { fetchUser } from "@services/userService";
import DeleteConfirmationDialog from "@components/organisms/DeleteConfirmationDialog";
import { format } from "date-fns";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography, IconButton, Alert, Box, Avatar } from "@mui/material";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import ProgressLoading from "@components/organisms/ProgressLoading";
import UserInfo from "@components/organisms/UserInfo";
import AccomplishmentBar from "@components/organisms/AccomplishmentBar";

/**
 * UserDetailsTemplate Component
 *
 * This component displays the details of a selected user, including personal information and important dates.
 * The component allows users to edit or delete their profile and handles navigation and dialog visibility.
 *
 * @param {Object} props - The route parameters containing the user ID.
 * @returns {JSX.Element} A detailed view of the selected user.
 */
function UserDetailsTemplate({ params }) {
  const router = useRouter();
  const { id } = params;
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    uin: null,
    major: "",
    year: null,
    email: "",
    phone: "",
    tshirt_size: "",
    aggie_ring_day: "",
    birthday: null,
    graduation_day: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const json = await fetchUser(id);
        setUser(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (id) {
      fetchCurrentUser();
    }
  }, [id]);

  if (loading) return <ProgressLoading />;

  if (error)
    return <Alert severity="error">Error fetching user: {error.message}</Alert>;

  console.log(user.aggie_ring_day);
  return (
    <Box width="80%" height="85vh" sx={{ margin: "60px auto" }}>
      {user ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "20px",
            height: "80vh",
          }}
        >
          <IconButton onClick={() => router.push("/Member")} role="back">
            <ArrowBackIcon />
          </IconButton>
          <AccomplishmentBar user={user} />
          <Box
            sx={{ margin: "20px 30px", maxHeight: "80vh", overflow: "auto" }}
          >
            <UserInfo user={user} />
          </Box>
          <Box sx={{ flexGrow: 1.5 }} />
        </Box>
      ) : (
        <Typography variant="h6">User not found</Typography>
      )}
    </Box>
  );
}

export default UserDetailsTemplate;
