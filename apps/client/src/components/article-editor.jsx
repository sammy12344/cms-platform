"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import {
  X,
  Code,
  Bold,
  Italic,
  LinkIcon,
  List,
  ListOrdered,
} from "lucide-react";
import { useRouter } from "next/navigation";

export function ArticleEditor() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handlePublish = () => {
    // In a real app, this would save to a database
    console.log({ title, content, tags, coverImage });
    router.push("/");
  };

  const insertMarkdown = (syntax) => {
    const textarea = document.querySelector("textarea");
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);

    let newText = "";
    switch (syntax) {
      case "bold":
        newText = `**${selectedText || "bold text"}**`;
        break;
      case "italic":
        newText = `*${selectedText || "italic text"}*`;
        break;
      case "link":
        newText = `[${selectedText || "link text"}](url)`;
        break;
      case "code":
        newText = `\`${selectedText || "code"}\``;
        break;
      case "list":
        newText = `\n- ${selectedText || "list item"}`;
        break;
      case "ordered":
        newText = `\n1. ${selectedText || "list item"}`;
        break;
      default:
        return;
    }

    const newContent =
      content.substring(0, start) + newText + content.substring(end);
    setContent(newContent);
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        <div className="space-y-4">
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <Input
                  placeholder="Article Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-3xl font-bold border-0 px-0 focus-visible:ring-0 placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <Label
                  htmlFor="cover-image"
                  className="text-sm text-muted-foreground"
                >
                  Cover Image URL (optional)
                </Label>
                <Input
                  id="cover-image"
                  placeholder="https://example.com/image.jpg"
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="flex items-center gap-1 border-b pb-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => insertMarkdown("bold")}
                  title="Bold"
                >
                  <Bold className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => insertMarkdown("italic")}
                  title="Italic"
                >
                  <Italic className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => insertMarkdown("link")}
                  title="Link"
                >
                  <LinkIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => insertMarkdown("code")}
                  title="Code"
                >
                  <Code className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => insertMarkdown("list")}
                  title="Bullet List"
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => insertMarkdown("ordered")}
                  title="Numbered List"
                >
                  <ListOrdered className="h-4 w-4" />
                </Button>
              </div>

              <Tabs defaultValue="write" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="write">Write</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>

                <TabsContent value="write" className="mt-4">
                  <Textarea
                    placeholder="Write your article content here... (Markdown supported)"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="min-h-[500px] font-mono text-sm"
                  />
                </TabsContent>

                <TabsContent value="preview" className="mt-4">
                  <div className="prose prose-sm dark:prose-invert max-w-none min-h-[500px] p-4 border rounded-md">
                    {content ? (
                      <div className="whitespace-pre-wrap">{content}</div>
                    ) : (
                      <p className="text-muted-foreground">
                        Nothing to preview yet...
                      </p>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </Card>
        </div>

        <aside className="space-y-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Publish Settings</h3>
            <div className="space-y-3">
              <Button
                className="w-full"
                onClick={handlePublish}
                disabled={!title.trim() || !content.trim()}
              >
                Publish Article
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                Save Draft
              </Button>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3">Tags</h3>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a tag..."
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                />
                <Button onClick={handleAddTag} size="sm">
                  Add
                </Button>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="gap-1">
                      #{tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}

              <p className="text-xs text-muted-foreground">
                Add up to 4 tags to help readers find your article
              </p>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3">Writing Tips</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Use clear, descriptive titles</li>
              <li>• Break content into sections</li>
              <li>• Add code examples when relevant</li>
              <li>• Include images to illustrate points</li>
              <li>• Proofread before publishing</li>
            </ul>
          </Card>
        </aside>
      </div>
    </div>
  );
}
