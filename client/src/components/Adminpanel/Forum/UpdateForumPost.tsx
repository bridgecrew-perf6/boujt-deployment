import {
    Box,
    Button,
    Center,
    Flex,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Spinner,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Textarea,
    Tfoot,
    Th,
    Thead,
    Tr,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCalendar, FaComment, FaPlus, FaUser } from "react-icons/fa";

import { ChatRoom, ForumPost, Syssnare } from "../../../../utils/types";
import { useStrapi } from "../../../auth/auth";
import { ChatRequest } from "../ChatRequest";
import ForumPostView from "./ForumPostView";
import ForumPreview from "./ForumPreview";

interface UpdateForumPostProps {
    open: boolean;
    onClose: Function;
    onSubmit?: Function;
    post: ForumPost;
}

export const UpdateForumPost: React.FC<UpdateForumPostProps> = ({
    open,
    onClose,
    onSubmit,
    post,
}) => {
    const { strapi, user } = useStrapi();
    const [formData, setFormData] = useState({
        title: post.title,
        text: post.text,
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const toast = useToast();

    const handleSubmit = () => {
        //TODO: Submit post from auth user

        if (formData.title.trim() === "" || formData.text.trim() === "") return;
        const ID_SYS = 1;
        setIsSubmitting(true);
        //TODO : CHANGE TO STRAPI SDK
        axios
            .put(`http://localhost:1337/api/forums/${post.id}`, {
                data: {
                    title: formData.title,
                    text: formData.text,
                },
            })
            .then((res) => {
                toast({
                    title: "Inlägget är uppdaterat!",
                    description: "Ditt inlägg har uppdaterats",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            })
            .catch((er) => {
                console.error(er);
            })
            .finally(() => {
                setIsSubmitting(false);
                if (onSubmit) onSubmit();
            });
    };

    if (!open) return null;

    return (
        <Modal size={"2xl"} isOpen={true} onClose={() => onClose()}>
            <ModalOverlay />

            <ModalContent width={"100%"}>
                <ModalCloseButton />
                <ModalBody borderRadius={8} backgroundColor={"white"} py={5}>
                    <Flex flexDirection={"column"} gap={5}>
                        <Text fontSize={20} fontWeight={800}>
                            Uppdatera inlägg
                        </Text>
                        <Input
                            value={formData.title}
                            placeholder="Titel"
                            onChange={(e) =>
                                setFormData((prev) => {
                                    return { ...prev, title: e.target.value };
                                })
                            }
                        />
                        <Textarea
                            value={formData.text}
                            onChange={(e) =>
                                setFormData((prev) => {
                                    return { ...prev, text: e.target.value };
                                })
                            }
                            rows={5}
                            placeholder="Skriv ditt inlägg här"
                        />
                        <Button
                            variant={"adminPrimary"}
                            onClick={() => handleSubmit()}
                            disabled={isSubmitting}
                        >
                            {!isSubmitting ? "Uppdatera" : <Spinner />}
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
